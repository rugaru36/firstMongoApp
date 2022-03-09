import { User } from '../models/User';
import { MongoDBManager } from '../database/mongo';

export class UserService {
  private readonly mongoManager: MongoDBManager = new MongoDBManager();

  async getAllUsers(): Promise<User[]> {
    return await this.mongoManager.getAll<User>(User.modelName);
  }

  async getUserById(id: string) {
    return await this.mongoManager.getById<User>(id, User.modelName);
  }

  async createNewUser(data: { [key: string]: any; }): Promise<User> {
    const newUser = new User(data);
    await this.mongoManager.save<User>(newUser, User.modelName);
    return newUser;
  }

  async deleteAllUsers() {
    await this.mongoManager.deleteAll(User.modelName);
  }

  async updateUserById(userId: string, data: { [key: string]: any; }) {
    await this.mongoManager.updateById(userId, data, User.modelName);
  }
}