from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.responses import JSONResponse
from logic import process_file_upload, retrieve_file_metadata_by_subject_semester
# import database  # This triggers the DB connection
# from bson import SON
# from fastapi.staticfiles import StaticFiles
# from fastapi.responses import HTMLResponse
# import os
# from pathlib import Path

app = FastAPI(
    title="File Uploader Service",
    description="A simple FastAPI service for uploading and managing files using MongoDB GridFS.",
    version="1.0.1"
)

# @app.get("/", response_class=HTMLResponse)
# async def serve_homepage():
#     html_path = Path(__file__).resolve().parent.parent / "public" / "index.html"
#     return html_path.read_text(encoding="utf-8")





@app.post("/upload/", summary="Upload a file to GridFS")
async def upload_file_endpoint(
    file: UploadFile = File(...),
    subject: str = Form(...),
    semester: str = Form(...)
):
    """
    Uploads a file to GridFS with subject and semester metadata.
    """
    file_id = await process_file_upload(file, subject, semester)
    return JSONResponse(
        content={"message": "File uploaded successfully", "file_id": file_id,"subject":subject,"semester":semester},
        status_code=201
        
    )


@app.get("/files", summary="Get files by subject and semester")
def get_files_by_subject_semester(subject: str, semester: str):
    """
    Retrieve metadata for files matching subject and semester.
    """
    files = retrieve_file_metadata_by_subject_semester(subject, semester)
    return JSONResponse(content={"files": files}, status_code=200)






if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)































































































# from fastapi import FastAPI, File, UploadFile, HTTPException
# from fastapi.responses import JSONResponse
# from pymongo import MongoClient
# import gridfs
# from bson.objectid import ObjectId
# from bson.errors import InvalidId
# import os
# from dotenv import load_dotenv

# load_dotenv()  # Load variables from .env


# mongo_uri = os.getenv("MONGODB_URI")
# db_name = os.getenv("DB_NAME")
# bucket_name = os.getenv("GRIDFS_BUCKET")

# # Connect to MongoDB dynamically
# client = MongoClient(mongo_uri)
# db = client[db_name]
# fs = gridfs.GridFS(db, collection=bucket_name)


# app = FastAPI()




# # Connect to MongoDB
# # client = MongoClient("mongodb://localhost:27017")
# # db = client["fileuploader"]
# # fs = gridfs.GridFS(db, collection="file_db")

# @app.post("/upload/")
# async def upload_file(file: UploadFile = File(...)):
#     try:
#         # Read file contents
#         contents = await file.read()

#         # Save to GridFS      #to store more than 16mb or large files
#         file_id = fs.put(contents, 
#                          filename=file.filename, 
#                          content_type=file.content_type, 
#                          chunk_size=10000024)

#         return JSONResponse(
#             content={"message": "File uploaded successfully","file_id": str(file_id)},
#             status_code=201
#         )
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))



# @app.get("/files/{file_id}")
# def get_file(file_id: str):
#     try:
#         # Validate ObjectId
#         try:
#             obj_id = ObjectId(file_id)
#         except InvalidId:
#             raise HTTPException(status_code=400, detail="Invalid file ID")

#         # Find file by _id
#         file = fs.find_one({"_id": obj_id})
#         if not file:
#             raise HTTPException(status_code=404, detail="File not found")

#         return JSONResponse(
#             content={
#                 "filename": file.filename,
#                 "content_type": file.content_type,
#                 "length": file.length
#             }
#         )
#     except HTTPException as e:
#         raise e  # Reraise known HTTP errors
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))







# # main.py
# from fastapi import FastAPI, File, UploadFile, HTTPException
# from fastapi.responses import JSONResponse
# from logic import process_file_upload, retrieve_file_metadata
# import database # This line ensures the database connection is initialized when main.py runs

# app = FastAPI(
#     title="File Uploader Service",
#     description="A simple FastAPI service for uploading and managing files using MongoDB GridFS.",
#     version="1.0.0"
# )

# @app.post("/upload/", summary="Upload a file to GridFS")
# async def upload_file_endpoint(file: UploadFile = File(...)):
#     """
#     Uploads a file to the MongoDB GridFS and returns the generated file ID.
#     """
#     file_id = await process_file_upload(file)
#     return JSONResponse(
#         content={"message": "File uploaded successfully", "file_id": file_id},
#         status_code=201
#     )

# @app.get("/files/{file_id}", summary="Get file metadata by ID")
# def get_file_metadata_endpoint(file_id: str):
#     """
#     Retrieves metadata (filename, content type, size) for a specific file by its ID.
#     """
#     metadata = retrieve_file_metadata(file_id)
#     return JSONResponse(content=metadata, status_code=200)















