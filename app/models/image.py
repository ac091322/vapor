from .db import db, environment, SCHEMA, add_prefix_for_prod


class Image(db.Model):
    __tablename__ = "images"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(255), nullable=False, unique=True)
    game_id = db.Column(
        db.ForeignKey(add_prefix_for_prod("games.id"), ondelete="CASCADE"),
        nullable=False,
        unique=True,
    )

    # one-to-one relationship
    game = db.relationship("Game", back_populates="image")

    def to_dict(self):
        return {
            "id": self.id,
            "image": self.image,
            "game_id": self.game_id,
            "game_title": self.game.title if self.game else None,
        }
