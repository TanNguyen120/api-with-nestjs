import mongoose from 'mongoose';

// the admin schema
const adminSchema: mongoose.Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['admin'] },
  avatar: { type: String },
});

// this will return the mongo model
export class Admin {
  model = mongoose.model('admin', adminSchema);

  async findById(id: string) {
    return this.model.findOne({ _id: id });
  }

  async newAdmin(model) {
    return this.model.create(model);
  }
}
