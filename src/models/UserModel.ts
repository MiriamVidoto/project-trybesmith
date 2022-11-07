import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(userData: IUser): Promise<IUser[]> {
    const { username, classe, level, password } = userData;
    await this.connection.execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const [rows] = await this.connection.execute<(
    IUser[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
      );                    
    return rows;
  }

  async getUser(login: ILogin): Promise<IUser[] | null> {
    const { username, password } = login;
    const [rows] = await this.connection.execute<(
    IUser[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
      );
    return rows;
  }
}
