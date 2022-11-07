import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();

const controller = new UserController();

userRoutes.post('/', controller.createUser);

export default userRoutes;