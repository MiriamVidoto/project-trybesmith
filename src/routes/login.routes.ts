import { Router } from 'express';
import UserController from '../controllers/UserController';

const loginRoutes = Router();

const controller = new UserController();

loginRoutes.post('/', controller.login);

export default loginRoutes;