import { Router } from 'express';
import { Sandbox } from '../types';

const router = Router();

// Sample sandbox data (later we'll get this from a database)
const sandboxes: Sandbox[] = [
  {
    id: '1',
    name: 'Django Sandbox',
    description: 'Python web framework for school projects',
    technology: 'Django/Python',
    url: '/django',
    status: 'development'
  },
  {
    id: '2', 
    name: 'Ruby on Rails Sandbox',
    description: 'Ruby web framework for work projects',
    technology: 'Ruby on Rails',
    url: '/rails',
    status: 'development'
  },
  {
    id: '3',
    name: 'Kotlin Sandbox', 
    description: 'Kotlin development for work projects',
    technology: 'Kotlin',
    url: '/kotlin',
    status: 'development'
  }
];

// Homepage route
router.get('/', (req, res) => {
  res.json({
    name: 'Carrie Snow',
    title: 'Developer Hub',
    description: 'Learning multiple technology stacks',
    sandboxes: sandboxes
  });
});

// Get all sandboxes
router.get('/api/sandboxes', (req, res) => {
  res.json({
    success: true,
    data: sandboxes
  });
});

// Get specific sandbox
router.get('/api/sandboxes/:id', (req, res) => {
  const sandbox = sandboxes.find(s => s.id === req.params.id);
  if (!sandbox) {
    return res.status(404).json({
      success: false,
      error: 'Sandbox not found'
    });
  }
  res.json({
    success: true,
    data: sandbox
  });
});

export default router;
