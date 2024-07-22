import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, requierd: [true, "Email is required"], unique: true },
  password: { type: String, required: [true, "Password is required"] },
  token: { type: String, default: null },
});

const User = mongoose.model("User", UserSchema);
export default User;
