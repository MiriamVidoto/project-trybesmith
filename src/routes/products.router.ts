import express from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRoutes = express.Router();

const productsController = new ProductsController();

productsRoutes.get('/', productsController.getProducts);

export default productsRoutes;
