from fastapi import UploadFile, HTTPException
from database import save_file_to_gridfs, get_files_by_subject_semester
from database import delete_file_from_gridfs
from bson import ObjectId
from bson.errors import InvalidId

async def process_file_upload(file: UploadFile, subject: str, semester: str,questiontype:str) -> str:
    """
    Uploads file to GridFS with subject and semester.
    """
    try:
        contents = await file.read()
        file_id = await save_file_to_gridfs(contents, file.filename, file.content_type, subject, semester,questiontype)
        return str(file_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during file upload: {e}")




def retrieve_file_metadata_by_subject_semester( semester: str, questiontype:str):
    """
    Gets metadata for files by subject and semester.
    """
    try:
        return get_files_by_subject_semester( semester,questiontype)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving files: {e}")



def delete_file_by_id(file_id: str):
    """
    Deletes a file by its ID after checking if it exists.
    """
    try:
        obj_id = ObjectId(file_id)
        deleted = delete_file_from_gridfs(obj_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="File not found")
        return {"message": "File deleted successfully"}
    except InvalidId:
        raise HTTPException(status_code=400, detail="Invalid file ID format")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {e}")















































































































# # logic.py
# from fastapi import UploadFile, HTTPException
# from database import save_file_to_gridfs, get_file_metadata_from_gridfs

# async def process_file_upload(file: UploadFile) -> str:
#     """
#     Processes the uploaded file, saves it to GridFS, and returns its ID.
#     """
#     try:
#         contents = await file.read()
#         file_id = await save_file_to_gridfs(contents, file.filename, file.content_type)
#         return str(file_id)
#     except HTTPException:
#         raise # Re-raise HTTPExceptions from database layer
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"An error occurred during file upload processing: {e}")

# def retrieve_file_metadata(file_id: str) -> dict:
#     """
#     Retrieves metadata for a given file ID.
#     """
#     try:
#         metadata = get_file_metadata_from_gridfs(file_id)
#         return metadata
#     except HTTPException:
#         raise # Re-raise HTTPExceptions from database layer
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"An error occurred during file metadata retrieval: {e}")