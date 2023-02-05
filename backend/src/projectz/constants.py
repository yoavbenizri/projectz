import dotenv
import os

ROOT_DIR = os.path.join(os.path.dirname(__file__), "../../..")
_values = dotenv.dotenv_values(f"{ROOT_DIR}/.env")
DATABASE_CONNECTION_STRING = (
    f"postgresql+psycopg2://{_values['DB_USERNAME']}:projectz@localhost:5432/projectz"
)
