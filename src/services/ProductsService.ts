import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async getProducts(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}