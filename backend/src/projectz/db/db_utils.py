from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from projectz.constants import DATABASE_CONNECTION_STRING

engine = create_engine(DATABASE_CONNECTION_STRING)

Base = declarative_base()

# Session = sessionmaker(engine)
