const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.resolve(__dirname, 'portfolio.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.serialize(() => {
      // Create Users table
      db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT
      )`, (err) => {
        if (!err) {
          // Create default admin user if not exists
          db.get("SELECT * FROM users WHERE email = ?", ['admin@example.com'], (err, row) => {
            if (!row) {
              const hash = bcrypt.hashSync('password123', 8);
              db.run("INSERT INTO users (email, password) VALUES (?, ?)", ['admin@example.com', hash]);
              console.log('Default admin created: admin@example.com / password123');
            }
          });
        }
      });

      // Create Projects table
      db.run(`CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        tags TEXT,
        image TEXT,
        link TEXT,
        createdAt INTEGER
      )`);

      // Create Experiences table
      db.run(`CREATE TABLE IF NOT EXISTS experiences (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        company TEXT,
        startDate TEXT,
        endDate TEXT,
        image TEXT,
        createdAt INTEGER
      )`);

      // Create Certifications table
      db.run(`CREATE TABLE IF NOT EXISTS certifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        issuer TEXT,
        description TEXT,
        tags TEXT,
        image TEXT,
        link TEXT,
        createdAt INTEGER
      )`);
    });
  }
});

module.exports = db;
