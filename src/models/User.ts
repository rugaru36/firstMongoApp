import { BaseDataModel } from "./Base/BaseModel";

export class User extends BaseDataModel {
  public name: string = String();
  public email: string = String();

  constructor(data: { [key: string]: any; }) {
    if (!data) { return; }
    super(data);
    if (typeof data.name == 'string') this.name = data.name;
    if (typeof data.email == 'string') this.email = data.email;
  }
}

User.modelName = 'User';