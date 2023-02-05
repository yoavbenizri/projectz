from projectz.db.db_utils import engine, Base

from projectz.db.models.users import User
from projectz.db.models.message import Message

Base.metadata.create_all(engine)
