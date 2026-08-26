import mongoose from 'mongoose';

const experienceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Number,
      default: () => Date.now(),
    }
  }
);

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
