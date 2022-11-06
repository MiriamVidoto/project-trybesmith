import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async create(product: IProduct) :Promise<IProduct> {
    const products = await this.model.create(product);
    return products;
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}