const express = require('express');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');
const db = require('./database');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

const app = express();
const PORT = 3000;
const JWT_SECRET = 'super_secret_key_123'; // In production, use environment variables

// Local CMS Exporter
const exportDatabaseToJson = () => {
  const getTableData = (table) => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM ${table} ORDER BY createdAt DESC`, [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  };

  Promise.all([
    getTableData('projects'),
    getTableData('experiences'),
    getTableData('certifications')
  ]).then(([projects, experiences, certifications]) => {
    const data = { projects, experiences, certifications };
    const outputPath = path.join(__dirname, '../public/data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log('Successfully exported database to public/data.json');
  }).catch(err => {
    console.error('Failed to export database:', err);
  });
};

// Middleware
app.use(cors());
app.use(express.json());

// Serve static uploaded files (if any remain)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer storage configuration for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'portfolio',
    allowed_formats: ['jpg', 'png', 'webp', 'jpeg']
  }
});
const upload = multer({ storage: storage });

// JWT Verification Middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).send({ message: 'No token provided.' });
  
  const token = authHeader.split(' ')[1]; // Format: Bearer TOKEN
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Unauthorized!' });
    req.userId = decoded.id;
    next();
  });
};

// --- AUTHENTICATION ROUTES ---
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
    if (err) return res.status(500).send({ message: err.message });
    if (!user) return res.status(404).send({ message: "User not found." });

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ token: null, message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 86400 }); // 24 hours
    res.status(200).send({ id: user.id, email: user.email, token: token });
  });
});

app.get('/api/auth/verify', verifyToken, (req, res) => {
  res.status(200).send({ message: 'Valid token', userId: req.userId });
});

// --- GENERIC CRUD ROUTES BUILDER ---
const createCrudRoutes = (tableName) => {
  // GET all items (sorted by createdAt descending)
  app.get(`/api/${tableName}`, (req, res) => {
    db.all(`SELECT * FROM ${tableName} ORDER BY createdAt DESC`, [], (err, rows) => {
      if (err) return res.status(500).send({ message: err.message });
      res.status(200).json(rows);
    });
  });

  // POST create new item
  app.post(`/api/${tableName}`, verifyToken, (req, res) => {
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    
    // Add createdAt timestamp
    keys.push('createdAt');
    values.push(Date.now());

    const placeholders = keys.map(() => '?').join(',');
    const sql = `INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${placeholders})`;

    db.run(sql, values, function (err) {
      if (err) return res.status(500).send({ message: err.message });
      exportDatabaseToJson();
      res.status(200).send({ id: this.lastID, ...req.body, createdAt: values[values.length - 1] });
    });
  });

  // PUT update existing item
  app.put(`/api/${tableName}/:id`, verifyToken, (req, res) => {
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    const id = req.params.id;

    const setString = keys.map(k => `${k} = ?`).join(', ');
    values.push(id);

    const sql = `UPDATE ${tableName} SET ${setString} WHERE id = ?`;
    db.run(sql, values, function (err) {
      if (err) return res.status(500).send({ message: err.message });
      exportDatabaseToJson();
      res.status(200).send({ message: 'Updated successfully', id });
    });
  });

  // DELETE item
  app.delete(`/api/${tableName}/:id`, verifyToken, (req, res) => {
    db.run(`DELETE FROM ${tableName} WHERE id = ?`, [req.params.id], function (err) {
      if (err) return res.status(500).send({ message: err.message });
      exportDatabaseToJson();
      res.status(200).send({ message: 'Deleted successfully' });
    });
  });
};

createCrudRoutes('projects');
createCrudRoutes('experiences');
createCrudRoutes('certifications');

// --- UPLOAD ROUTE ---
app.post('/api/upload', verifyToken, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).send({ message: 'No file uploaded.' });
  // Return the Cloudinary URL
  res.status(200).send({ imageUrl: req.file.path });
});

exportDatabaseToJson();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
