from .db import db, environment, SCHEMA, add_prefix_for_prod


class Screenshot(db.Model):
    __tablename__ = "screenshots"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    screenshot_url = db.Column(db.String(255), nullable=False, unique=True)
    game_id = db.Column(
        db.ForeignKey(add_prefix_for_prod("games.id"), ondelete="CASCADE"),
        nullable=False,
    )

    # many-to-one relationship
    game = db.relationship("Game", back_populates="screenshot")

    def to_dict(self):
        return {
            "id": self.id,
            "screenshot_url": self.screenshot_url,
            "game_id": self.game_id,
        }
