from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "fileuploader")

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
admin_collection = db["admins"]

def get_admin_by_username(username: str):
    """
    Retrieves an admin record by username.
    """
    return admin_collection.find_one({"username": username})