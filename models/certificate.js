import mongoose from "mongoose"; 
import {Schema} from "mongoose";

const certificateSchema = new Schema(
  {
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

const Certificate = mongoose.models.Certificate || mongoose.model("Certificate", certificateSchema);

export default Certificate;
