from .db import db, environment, SCHEMA
from .game_screenshot_joined import game_screenshot_joined


class Screenshot(db.Model):
    __tablename__ = "screenshots"

    if environment == "production":
        __table_args__ = {"SCHEM": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    screenshot_url = db.Column(db.Integer, nullable=False, unique=True)

    # many-to-many relationship
    game_in_game_screenshot_joined = db.relationship(
        "Game",
        secondary=game_screenshot_joined,
        back_populates="screenshot_in_game_screenshot_joined",
        passive_deletes=True,
    )

    def to_dict(self):
        return {
            "id": self.id,
            "screenshot_url": self.screenshot_url,
            "game": (
                [game.to_dict() for game in game_screenshot_joined]
                if self.game_in_game_screenshot_joined
                else None
            ),
        }
