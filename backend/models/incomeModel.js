import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;


const IncomeSchema = new mongoose.Schema({
  incomeDesc: {
    type: String,
    require: true,
    trim: true,
  },
  incomeAmount: {
    type: Number,
    require: true,
    trim: true,
  },
  postedBy: {
    type: ObjectId,
    ref: 'User'
  }
},{timestamps: true});
const Income = mongoose.model('Income', IncomeSchema);

export default Income;