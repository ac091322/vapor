from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime, timezone


class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    thumbs_up = db.Column(db.Boolean, nullable=True)
    thumbs_down = db.Column(db.Boolean, nullable=True)
    description = db.Column(db.String(2000), nullable=False)
    user_id = db.Column(
        db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="SET NULL"),
        nullable=True,
    )
    game_id = db.Column(
        db.ForeignKey(add_prefix_for_prod("games.id"), ondelete="CASCADE"),
        nullable=False,
    )
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(tz=timezone.utc))
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(tz=timezone.utc),
        onupdate=lambda: datetime.now(tz=timezone.utc),
    )

    # many-to-one relationship
    user = db.relationship("User", back_populates="review")
    game = db.relationship("Game", back_populates="review")

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.validate_review()

    def validate_review(self):
        if self.thumbs_up == self.thumbs_down:
            raise ValueError(
                "Exactly one of 'thumbs up' or 'thumbs down' must be True."
            )

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "game_id": self.game_id,
            "thumbs_up": self.thumbs_up,
            "thumbs_down": self.thumbs_down,
            "description": self.description,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "username": (
                self.user.username if hasattr(self.user, "username") else self.user
            ),
        }
