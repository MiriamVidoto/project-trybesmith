import { Request, Response } from 'express';
import OrdersService from '../services/OrdersService';

export default class OdersController {
  public service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  GetAll = async (_req: Request, res: Response) => {
    const result = await this.service.getOrders();
    return res.status(200).json(result);
  };
}