import { Request, Response } from 'express';

import ProductsService from '../services/ProductsService';

// const insertProduct = async (req: Request, res: Response) => {
//   const data = req.body;
//   const result = await productsServiceInsert(data);
//   res.(result.status).json(result.message);
// }

// export default {insertProduct}

export default class ProductsController {
  service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  getProducts = async (req: Request, res: Response) => {
    const products = await this.service.getProducts();
    res.status(200).json(products);
  };
}