from projectz.db.db_utils import Base
from sqlalchemy import Column, UUID, String, DateTime
from uuid import uuid1


class Message(Base):
    __tablename__ = "messages"
    uid = Column(UUID, primary_key=True, default=uuid1)
    content = Column(String)
    time = Column(DateTime)