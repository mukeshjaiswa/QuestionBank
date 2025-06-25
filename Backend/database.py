import os
from dotenv import load_dotenv
from pymongo import MongoClient
import gridfs
# from bson.objectid import ObjectId
# from bson.errors import InvalidId
from fastapi import HTTPException
from typing import Optional
from bson import ObjectId

load_dotenv()

# Env config
MONGO_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "fileuploader")
BUCKET_NAME = os.getenv("GRIDFS_BUCKET", "file_db")

# DB connection
try:
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    fs = gridfs.GridFS(db, collection=BUCKET_NAME)
    print(f"✅ Connected to MongoDB database: {DB_NAME}, bucket: {BUCKET_NAME}")
except Exception as e:
    raise RuntimeError(f"❌ Could not connect to MongoDB: {e}")

# GridFS Operations

async def save_file_to_gridfs(contents: bytes, 
                              filename: Optional[str], 
                              content_type: Optional[str], 
                              subject: str, 
                              semester: str,
                              questiontype:str
                            
                              ):
    """Save file with subject and semester metadata."""
    try:
        file_id = fs.put(
            contents,
            filename=filename,
            content_type=content_type,
            subject=subject,
            semester=semester,
             questiontype=questiontype,
            chunk_size=1000024 * 1024
        )
        return file_id
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save file: {e}")


def get_files_by_subject_semester( semester: str,  questiontype:str):
    """Find all files with subject and semester metadata."""
    try:
        results = []
        for file in fs.find({ "semester": semester, 'questiontype':questiontype}):
            results.append({
                "file_id": str(file._id),
                "filename": file.filename,
                "content_type": file.content_type,
                "subject": file.subject,
                "semester": file.semester,
                'questiontype':file.questiontype,
                "length": file.length,
                "upload_date": file.upload_date.isoformat()
            })

        if not results:
            raise HTTPException(status_code=404, detail="No files found.")
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching files: {e}")


def delete_file_from_gridfs(file_id: ObjectId) -> bool:
    """
    Deletes file from GridFS. Returns True if file existed and was deleted.
    """
    try:
        if not fs.exists({"_id": file_id}):
            return False
        fs.delete(file_id)
        return True
    except Exception:
        raise



























































































# # database.py
# import os
# from dotenv import load_dotenv
# from pymongo import MongoClient
# import gridfs
# from bson.objectid import ObjectId
# from bson.errors import InvalidId
# from fastapi import HTTPException

# load_dotenv()  # Load variables from .env

# # --- Configuration ---
# MONGO_URI = os.getenv("MONGODB_URI")
# DB_NAME = os.getenv("DB_NAME")
# BUCKET_NAME = os.getenv("GRIDFS_BUCKET")

# # --- Database Connection ---
# try:
#     client = MongoClient(MONGO_URI)
#     db = client[DB_NAME]
#     fs = gridfs.GridFS(db, collection=BUCKET_NAME)
#     print("Successfully connected to MongoDB!")
# except Exception as e:
#     print(f"Error connecting to MongoDB: {e}")
#     # Depending on your deployment, you might want to raise an exception here
#     # or handle it gracefully if the app can start without a DB connection immediately.
#     raise RuntimeError(f"Could not connect to MongoDB: {e}")


# # --- GridFS Operations ---
# async def save_file_to_gridfs(contents: bytes, filename: str, content_type: str) -> ObjectId:
#     """Saves file contents to GridFS."""
#     try:
#         file_id = fs.put(
#             contents,
#             filename=filename,
#             content_type=content_type,
#             chunk_size=1048576  # Using 1MB chunk size (1024 * 1024)
#         )
#         return file_id
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Failed to save file to GridFS: {e}")

# def get_file_metadata_from_gridfs(file_id: str):
#     """Retrieves file metadata from GridFS by ID."""
#     try:
#         obj_id = ObjectId(file_id)
#     except InvalidId:
#         raise HTTPException(status_code=400, detail="Invalid file ID format.")

#     file = fs.find_one({"_id": obj_id})
#     if not file:
#         raise HTTPException(status_code=404, detail="File not found.")
#     return {
#         "filename": file.filename,
#         "content_type": file.content_type,
#         "length": file.length
#     }