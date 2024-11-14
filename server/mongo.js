const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/forum_vr")
  .then(() => {
    console.log("mongo connected");
  })
  .catch(() => {
    console.log("failed");
  });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const enterpriseSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  phone:{
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 15,
    validate: {
      validator: function(v) {
        return /^[0-9]+$/.test(v);  // Kiểm tra xem chỉ có các chữ số
      },
      message: props => `${props.value} is not a valid phone number!`  // Thông báo lỗi nếu không hợp lệ
    }
  },
  company:{
    type: String,
    required: true,
  }
});

const userCollection = mongoose.model("userCollection", userSchema);
const enterpriseCollection = mongoose.model("enterpriseCollection", enterpriseSchema);
const collection = {
  userCollection,
  enterpriseCollection,
};

module.exports = collection;