"""initial migration

Revision ID: 53cca88118f3
Revises: 
Create Date: 2024-08-21 16:59:58.011187

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '53cca88118f3'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('screenshots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('screenshot_url', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('screenshot_url')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=20), nullable=False),
    sa.Column('email', sa.String(length=40), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('avatar', sa.String(length=255), nullable=True),
    sa.Column('about', sa.String(length=2000), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('games',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('price', sa.Numeric(precision=6, scale=2), nullable=False),
    sa.Column('release_date', sa.Date(), nullable=False),
    sa.Column('cover_art', sa.String(length=255), nullable=False),
    sa.Column('min_requirements', sa.String(length=255), nullable=False),
    sa.Column('min_os', sa.String(length=255), nullable=False),
    sa.Column('min_processor', sa.String(length=255), nullable=False),
    sa.Column('min_memory', sa.String(length=255), nullable=False),
    sa.Column('min_graphics', sa.String(length=255), nullable=False),
    sa.Column('min_directx', sa.String(length=255), nullable=False),
    sa.Column('min_storage', sa.String(length=255), nullable=False),
    sa.Column('min_sound_card', sa.String(length=255), nullable=False),
    sa.Column('min_additional_notes', sa.String(length=255), nullable=False),
    sa.Column('rec_requirements', sa.String(length=255), nullable=False),
    sa.Column('rec_os', sa.String(length=255), nullable=False),
    sa.Column('rec_processor', sa.String(length=255), nullable=False),
    sa.Column('rec_memory', sa.String(length=255), nullable=False),
    sa.Column('rec_graphics', sa.String(length=255), nullable=False),
    sa.Column('rec_directx', sa.String(length=255), nullable=False),
    sa.Column('rec_storage', sa.String(length=255), nullable=False),
    sa.Column('rec_sound_card', sa.String(length=255), nullable=False),
    sa.Column('rec_additional_notes', sa.String(length=255), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('title')
    )
    op.create_table('shopping_carts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('user_id')
    )
    op.create_table('carts_items_joined',
    sa.Column('shopping_cart_id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.ForeignKeyConstraint(['shopping_cart_id'], ['shopping_carts.id'], ),
    sa.PrimaryKeyConstraint('shopping_cart_id', 'game_id')
    )
    op.create_table('games_categories_joined',
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('category_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['category_id'], ['categories.id'], ),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.PrimaryKeyConstraint('game_id', 'category_id')
    )
    op.create_table('games_screenshots_joined',
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('screenshot_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.ForeignKeyConstraint(['screenshot_id'], ['screenshots.id'], ),
    sa.PrimaryKeyConstraint('game_id', 'screenshot_id')
    )
    op.create_table('libraries_joined',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'game_id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('thumbs_up', sa.Boolean(), nullable=True),
    sa.Column('thumbs_down', sa.Boolean(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='SET NULL'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('trailers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('trailer_url', sa.String(length=255), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('wishlists_joined',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'game_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('wishlists_joined')
    op.drop_table('trailers')
    op.drop_table('reviews')
    op.drop_table('libraries_joined')
    op.drop_table('games_screenshots_joined')
    op.drop_table('games_categories_joined')
    op.drop_table('carts_items_joined')
    op.drop_table('shopping_carts')
    op.drop_table('games')
    op.drop_table('users')
    op.drop_table('screenshots')
    op.drop_table('categories')
    # ### end Alembic commands ###
