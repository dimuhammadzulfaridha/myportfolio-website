import mongoose from 'mongoose';

const certificationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    issuer: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: {
      type: String, // Stringified JSON array
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

const Certification = mongoose.model('Certification', certificationSchema);
export default Certification;
