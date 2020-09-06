import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const CarSchema = new Schema({
  model: String,
  modelNumber: String,
  owner: String,
  // owner: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});
