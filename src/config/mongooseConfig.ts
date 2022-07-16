const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// đây là file chứa mã nguồn cho việc kết nối đến mongoDB, Khi cần các chỉnh sửa trong việc kết nối đến mongoDB thì sửa file này

export default async function mongoConnect() {
  try {
    // connect to mongoDB with uri
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err);
  }
}
