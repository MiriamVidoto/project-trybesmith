import express from 'express';
import productsRoutes from './products.router';
import loginRoutes from './login.routes';
import userRoutes from './user.routes';
import ordersRoutes from './orders.routes';

const routes = express.Router();

routes.use('/products', productsRoutes);
routes.use('/login', loginRoutes);
routes.use('/users', userRoutes);
routes.use('/orders', ordersRoutes);

export default routes;
