import * as moongose from "mongoose";

const User = new moongose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default User;
