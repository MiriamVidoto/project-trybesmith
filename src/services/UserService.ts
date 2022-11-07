import jsonWebToken from 'jsonwebtoken';
import connection from '../models/connection';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/UserModel';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public jwt = jsonWebToken;

  async create(userData: IUser) {
    const user = await this.model.create(userData);
    return this.generateToken(user[0]);
  }

  async userLogin(loginData: ILogin) {
    const user = await this.model.getUser(loginData);
    if (user === null) {
      return 'Invalid';
    }
    return this.generateToken(user[0]);
  }

  generateToken(user: IUser) {
    const payload = { id: user.id, username: user.username };
    return this.jwt.sign(
      payload,
      'secret',
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}