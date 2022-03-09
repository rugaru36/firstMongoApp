import { Collection, Db as MongoDb, MongoClient, ObjectId } from 'mongodb';
import { BaseDataModel } from '../models/Base/BaseModel';

export class MongoDBManager {
  private readonly connectUrl = 'mongodb+srv://rug4ru:rug4ru31415@cluster0.xil3n.mongodb.net';
  private client: MongoClient = new MongoClient(this.connectUrl);
  private dbName: string = String();

  public setDbName(newName: string) {
    this.dbName = newName;
  }

  public async getAll<Model extends BaseDataModel>(collectionName: string): Promise<Model[]> {
    await this.openConnection();
    const db: MongoDb = this.client.db(this.dbName);
    const collection: Collection = db.collection(collectionName);
    const result: Model[] = (await collection.find({}).toArray()) as Model[];
    await this.closeConnection();
    return result;
  }

  public async getById<Model extends BaseDataModel>(id: string, collectionName: string): Promise<Model | null> {
    await this.openConnection();
    const db: MongoDb = this.client.db(this.dbName);
    const collection: Collection = db.collection(collectionName);
    const result: Model | null = await collection.findOne({ _id: new ObjectId(id) }) as Model ?? null;
    await this.closeConnection();
    console.log({ result });
    return result;
  }

  public async save<Model extends BaseDataModel>(newElement: Model, collectionName: string): Promise<void> {
    newElement.created = Date.now() / 1000;
    newElement.updated = Date.now() / 1000;
    await this.openConnection();
    const db: MongoDb = this.client.db(this.dbName);
    const collection: Collection = db.collection(collectionName);
    await collection.insertOne(newElement);
    await this.closeConnection();
  }

  public async deleteAll(collectionName: string): Promise<void> {
    await this.openConnection();
    const db: MongoDb = this.client.db(this.dbName);
    const collection: Collection = db.collection(collectionName);
    await collection.deleteMany({});
    await this.closeConnection();
  }

  public async updateById(id: string, dataToUpdate: { [key: string]: any; }, collectionName: string) {
    await this.openConnection();
    const db: MongoDb = this.client.db(this.dbName);
    const collection: Collection = db.collection(collectionName);
    await collection.updateOne({ '_id': new ObjectId(id) }, dataToUpdate);
    await this.closeConnection();
  }
  
  private async openConnection() {
    await this.client.connect();
  }

  private async closeConnection() {
    await this.client.close();
  }
}