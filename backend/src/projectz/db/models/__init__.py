from projectz.db.db_utils import engine, Base

from projectz.db.models.users import User

Base.metadata.create_all(engine)
