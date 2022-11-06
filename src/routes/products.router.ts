import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.post('/', productsController.create);

productsRoutes.get('/', productsController.getAll);

export default productsRoutes;
