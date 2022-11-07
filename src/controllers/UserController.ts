import { Request, Response } from 'express';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';
import UserService from '../services/UserService';

export default class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  createUser = async (req: Request<object, object, IUser>, res: Response) => {
    const userData = req.body;
    const token = await this.service.create(userData);
    return res.status(201).json({ token });
  };

  login = async (req: Request<object, object, ILogin>, res: Response) => {
    const loginData = req.body;
    const token = await this.service.userLogin(loginData);
    return res.status(200).json(token);
  };
}