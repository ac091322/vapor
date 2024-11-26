from .db import db, environment, SCHEMA, add_prefix_for_prod
from .shopping_cart_item import shopping_cart_item


class ShoppingCart(db.Model):
    __tablename__ = "shopping_carts"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"),
        nullable=False,
        unique=True,
    )

    # many-to-many relationship
    game_in_shopping_cart_item = db.relationship(
        "Game",
        secondary=shopping_cart_item,
        back_populates="shopping_cart_in_shopping_cart_item",
        passive_deletes=True,
    )

    # one-to-one relationship
    user = db.relationship("User", back_populates="shopping_cart")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "username": self.user.username if self.user else None,
        }
