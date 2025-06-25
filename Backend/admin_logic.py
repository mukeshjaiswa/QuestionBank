from admin_database import get_admin_by_username

def verify_admin_credentials(username: str, password: str) -> bool:
    """
    Validates admin credentials against the database.
    """
    admin = get_admin_by_username(username)
    if not admin:
        return False

    # Basic password check (plaintext for now)
    return admin["password"] == password