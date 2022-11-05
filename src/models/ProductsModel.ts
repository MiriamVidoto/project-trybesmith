import { Pool } from 'mysql2/promise';
import { IProduct } from '../interfaces';

// const insertProduct = async ({name, amount}): Promisse<> => {
//   const [result] = await connection.execute(
//     'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
//     [name, amount],
//   );
//   return { status: 201, mesage: { id: result.insertId, name, amount } };
// };

// const getAllProducts = async () => {
//   const [products] = await connection.execute(
//     'SELECT * FROM Trybesmith.Products',
//   );
//   return { status: 201, mesage: products };
// };

// export default { insertProduct, getAllProducts };

export default class ProductsModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // async create(product: IProduct): Promise<any> {
  //   const [result] = await this.connection.execute(
  //     'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
  //     [product.name, product.amount],
  //   );
  //   return result;
  // }

  async getAll(): Promise<IProduct[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return products as IProduct[];
  }
}
