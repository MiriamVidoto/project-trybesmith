import { Router } from 'express';
import OdersController from '../controllers/OrdersController';

const ordersRoutes = Router();

const ordersController = new OdersController();

ordersRoutes.get('/', ordersController.GetAll);

export default ordersRoutes;