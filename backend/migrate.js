import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import Experience from './models/Experience.js';
import Certification from './models/Certification.js';

dotenv.config();

const migrateData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for migration.');

    const rawData = fs.readFileSync('../public/data.json', 'utf8');
    const data = JSON.parse(rawData);

    // Seed Projects
    if (data.projects && data.projects.length > 0) {
      await Project.deleteMany(); // Clear existing
      await Project.insertMany(data.projects);
      console.log('Projects migrated successfully.');
    }

    // Seed Experiences
    if (data.experiences && data.experiences.length > 0) {
      await Experience.deleteMany();
      await Experience.insertMany(data.experiences);
      console.log('Experiences migrated successfully.');
    }

    // Seed Certifications
    if (data.certifications && data.certifications.length > 0) {
      await Certification.deleteMany();
      await Certification.insertMany(data.certifications);
      console.log('Certifications migrated successfully.');
    }

    console.log('Data migration complete!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

migrateData();
