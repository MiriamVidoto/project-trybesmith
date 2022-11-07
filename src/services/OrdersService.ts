import connection from '../models/connection';
import OrdersModel from '../models/OrdersModel';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getOrders() {
    return this.model.getAll();
  }
}