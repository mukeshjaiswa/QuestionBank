from fastapi import UploadFile, HTTPException
from database import save_file_to_gridfs, get_files_by_subject_semester

async def process_file_upload(file: UploadFile, subject: str, semester: str) -> str:
    """
    Uploads file to GridFS with subject and semester.
    """
    try:
        contents = await file.read()
        file_id = await save_file_to_gridfs(contents, file.filename, file.content_type, subject, semester)
        return str(file_id)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error during file upload: {e}")

def retrieve_file_metadata_by_subject_semester(subject: str, semester: str):
    """
    Gets metadata for files by subject and semester.
    """
    try:
        return get_files_by_subject_semester(subject, semester)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving files: {e}")

















































































































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