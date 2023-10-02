from news_powered_by_metaphor.models import User
from news_powered_by_metaphor.extensions import ma, db


class UserSchema(ma.SQLAlchemyAutoSchema):

    id = ma.Int(dump_only=True)
    password = ma.String(load_only=True, required=True)

    class Meta:
        model = User
        sqla_session = db.session
        load_instance = True
        exclude = ("_password",)
