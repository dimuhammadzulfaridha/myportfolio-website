import mongoose from 'mongoose';

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tags: {
      type: String, // Stringified JSON array to match current frontend expectations
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    createdAt: {
      type: Number,
      default: () => Date.now(),
    }
  }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
