import { prop, getModelForClass, ReturnModelType } from '@typegoose/typegoose';

class User {
  @prop({ unique: true, dropDup: true })
  public login: string;

  @prop()
  public password: string;

  public static async findByLogin(this: ReturnModelType<typeof User>, login: string) {
    return this.findOne({ login }).exec();
  }
}
export default getModelForClass(User);
