import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/150',
    },
    url: {
      type: String,
      default: 'https://example.com',
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
