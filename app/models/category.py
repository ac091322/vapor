from .db import db, environment, SCHEMA
from .game_category_joined import game_category_joined


class Category(db.Model):
    __tablename__ = "categories"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False, unique=True)

    # many-to-many relationship:
    game_in_game_category_joined = db.relationship(
        "Game",
        secondary=game_category_joined,
        back_populates="category_in_game_category_joined",
        passive_deletes=True,
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "game": (
                [game.to_dict() for game in self.category_in_game_category_joined]
                if self.category_in_game_category_joined
                else None
            ),
        }
