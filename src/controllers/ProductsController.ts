import { Request, Response } from 'express';
import { IProduct } from '../interfaces/IProduct';

import ProductsService from '../services/ProductsService';

export default class ProductsController {
  public service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  create = async (req: Request< object, object, IProduct>, res: Response) => {
    const product = req.body;
    const products = await this.service.create(product);
    res.status(201).json(products);
  };

  getAll = async (req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(200).json(products);
  };
}