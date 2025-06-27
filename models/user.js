import mongoose, {models, Schema} from "mongoose";

const userSchema = new Schema({
    name: {
    type: String,
    default: "guest",
    required: true,
  },
  email: {
    type: String,
    required: true, 
    unique: true,
  },
  image: {
    type: String,
    default: "https://www.gravatar.com/avatar/",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  }

}, {timeseries: true});


const User = models.User || mongoose.model("User", userSchema);

export default User;
