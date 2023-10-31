import mongoose, { Schema } from "mongoose";
import bCrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
});

// register
userSchema.methods.setPassword = async function (password) {
  this.password = await bCrypt.hash(password, 10);
  // $2b$06$5v7eADpJ2RvEaa8TMjGBDuV5jhEEiQOqrzYg/lwRM.hVIae1aghPe
  // $2b$06$RRqYCN8iR4hm8Fp0FYp74uijzShNhmdmo1Vq2UJU9O5zvE48rI7yK
};

// login
userSchema.methods.validatePassword = async function (password) {
  return bCrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);

export default User;
