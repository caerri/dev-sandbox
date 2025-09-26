// Import required packages
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware - protects against common attacks
app.use(helmet());

// CORS middleware - allows cross-origin requests
app.use(cors());

// Logging middleware - logs all HTTP requests
app.use(morgan('combined'));

// Body parsing middleware - handles JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Basic route - your homepage
app.get('/', (req, res) => {
  res.send(`
    <h1>Carrie Snow</h1>
    <p>Sandboxes</p>
    <ul>
      <li><a href="/django">Django Sandbox</a></li>
      <li><a href="/rails">Ruby on Rails Sandbox</a></li>
      <li><a href="/kotlin">Kotlin Sandbox</a></li>
    </ul>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`dev-hub running on http://localhost:${PORT}`);
});