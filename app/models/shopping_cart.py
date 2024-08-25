from .db import db, environment, SCHEMA, add_prefix_for_prod
from .cart_item_joined import cart_item_joined


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
    game_in_cart_item_joined = db.relationship(
        "Game",
        secondary=cart_item_joined,
        back_populates="shopping_cart_in_cart_item_joined",
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
