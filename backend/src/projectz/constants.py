import dotenv
import os

dotenv.load_dotenv("../../../.env")

DATABASE_CONNECTION_STRING = (
    f"postgresql+psycopg2://{os.environ['DB_NAME']}:projectz@localhost:5432/projectz"
)
