from .db import db, environment, SCHEMA, add_prefix_for_prod


class Trailer(db.Model):
    __tablename__ = "trailers"

    if environment == "production":
        __table_args__ = {"Schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    trailer_url = db.Column(db.String(255), nullable=False, unique=True)
    game_id = db.Column(
        db.ForeignKey(add_prefix_for_prod("games.id"), ondelete="CASCADE"),
        nullable=False,
        unique=True,
    )

    # one-to-one relationship
    game = db.relationship("Game", back_populates="trailer")

    def to_dict(self):
        return {
            "id": self.id,
            "trailer_url": self.trailer_url,
            "game_id": self.game_id,
            "game_title": self.game.title if self.game else None,
        }
