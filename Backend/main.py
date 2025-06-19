from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from pymongo import MongoClient
import gridfs
from bson.objectid import ObjectId
from bson.errors import InvalidId
import os
from dotenv import load_dotenv

load_dotenv()  # Load variables from .env


mongo_uri = os.getenv("MONGODB_URI")
db_name = os.getenv("DB_NAME")
bucket_name = os.getenv("GRIDFS_BUCKET")

# Connect to MongoDB dynamically
client = MongoClient(mongo_uri)
db = client["db_name"]
fs = gridfs.GridFS(db, collection="bucket_name")


app = FastAPI()




# Connect to MongoDB
# client = MongoClient("mongodb://localhost:27017")
# db = client["fileuploader"]
# fs = gridfs.GridFS(db, collection="file_db")

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    try:
        # Read file contents
        contents = await file.read()

        # Save to GridFS      #to store more than 16mb or large files
        file_id = fs.put(contents, 
                         filename=file.filename, 
                         content_type=file.content_type, 
                         chunk_size=10000024)

        return JSONResponse(
            content={"message": "File uploaded successfully","file_id": str(file_id)},
            status_code=201
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



@app.get("/files/{file_id}")
def get_file(file_id: str):
    try:
        # Validate ObjectId
        try:
            obj_id = ObjectId(file_id)
        except InvalidId:
            raise HTTPException(status_code=400, detail="Invalid file ID")

        # Find file by _id
        file = fs.find_one({"_id": obj_id})
        if not file:
            raise HTTPException(status_code=404, detail="File not found")

        return JSONResponse(
            content={
                "filename": file.filename,
                "content_type": file.content_type,
                "length": file.length
            }
        )
    except HTTPException as e:
        raise e  # Reraise known HTTP errors
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))





















