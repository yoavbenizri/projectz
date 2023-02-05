from projectz.db.db_utils import Base
from sqlalchemy import Column, UUID, String
from uuid import uuid1


class User(Base):
    __tablename__ = "users"
    uid = Column(UUID, primary_key=True, default=uuid1)
    username = Column(String)
    password = Column(String, default="12345")
    first_name = Column(String)
    last_name = Column(String)
