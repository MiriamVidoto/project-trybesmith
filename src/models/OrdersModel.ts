import { Pool } from 'mysql2/promise';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll() {
    const [result] = await this.connection.execute(
      `SELECT
      o.id, o.userId, JSON_ARRAYAGG(p.id) productsIds
      FROM
      Trybesmith.Orders o
      INNER JOIN Trybesmith.Products p ON
      p.orderId = o.id
      GROUP BY 
      o.id`,
    );
    return result;
  }
}