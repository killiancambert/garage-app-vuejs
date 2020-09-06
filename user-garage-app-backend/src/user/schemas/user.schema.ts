import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  cars: String,
  // cars: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Car',
  //   },
  // ],
});
