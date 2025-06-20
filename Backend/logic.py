# logic.py
from fastapi import UploadFile, HTTPException
from database import save_file_to_gridfs, get_file_metadata_from_gridfs

async def process_file_upload(file: UploadFile) -> str:
    """
    Processes the uploaded file, saves it to GridFS, and returns its ID.
    """
    try:
        contents = await file.read()
        file_id = await save_file_to_gridfs(contents, file.filename, file.content_type)
        return str(file_id)
    except HTTPException:
        raise # Re-raise HTTPExceptions from database layer
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during file upload processing: {e}")

def retrieve_file_metadata(file_id: str) -> dict:
    """
    Retrieves metadata for a given file ID.
    """
    try:
        metadata = get_file_metadata_from_gridfs(file_id)
        return metadata
    except HTTPException:
        raise # Re-raise HTTPExceptions from database layer
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred during file metadata retrieval: {e}")