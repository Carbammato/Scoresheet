from pydantic import BaseModel

from models.player_models import PlayerModel


class LoginModel(BaseModel):
    username: str
    password: str


class UserModel(LoginModel):
    playerId: str


class SignupModel(BaseModel):
    signupData: LoginModel
    player: PlayerModel


class AuthenticatedUserModel(BaseModel):
    accessToken: str
    userData: PlayerModel


class ChangePasswordModel(BaseModel):
    oldPassword: str
    newPassword: str


class Settings(BaseModel):
    authjwt_secret_key: str = "my_jwt_secret"
