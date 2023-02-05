from ..models import Base
from sqlalchemy import Column, UUID, String
from uuid import uuid1


class User(Base):
    uid = Column(UUID, primary_key=True, default=uuid1)
