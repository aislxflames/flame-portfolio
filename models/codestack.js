import mongoose from "mongoose"; 
import {Schema} from "mongoose";

const codestackSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/150",
    }
  },
  {
    timestamps: true,
  }
)

const Codestack = mongoose.models.Codestack || mongoose.model("Codestack", codestackSchema);

export default Codestack;
