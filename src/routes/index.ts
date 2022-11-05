import express from 'express';
import productsRoutes from './products.router';

const routes = express.Router();

routes.use('/products', productsRoutes);

export default routes;
