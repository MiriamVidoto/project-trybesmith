import { Request, Response } from 'express';
import { IProduct } from '../interfaces';

import ProductsService from '../services/ProductsService';

// const insertProduct = async (req: Request, res: Response) => {
//   const data = req.body;
//   const result = await productsServiceInsert(data);
//   res.(result.status).json(result.message);
// }

// export default {insertProduct}

export default class ProductsController {
  public service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  create = async (req: Request, res: Response) => {
    const product: IProduct = req.body;
    const products = await this.service.create(product);
    res.status(201).json(products);
  };

  getAll = async (req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(200).json(products);
  };
}