import { Router } from 'express';
import { Sandbox } from '../types';

const router = Router();

function renderTemplate(data: { name: string; description: string; sandboxes: Sandbox[] }) {
  const sandboxHtml = data.sandboxes.map(sandbox => `
    <div class="sandbox">
      <div class="status">${sandbox.status}</div>
      <h3>${sandbox.name}</h3>
      <p>${sandbox.description}</p>
      <span class="technology">${sandbox.technology}</span>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Developer Hub - ${data.name}</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <div class="header">
    <h1>${data.name}</h1>
    <p class="description">${data.description}</p>
  </div>
  <div class="sandboxes">
    ${sandboxHtml}
  </div>
</body>
</html>`;
}

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

router.get('/', (req, res) => {
  const html = renderTemplate({
    name: 'Carrie Snow',
    description: 'Learning multiple technology stacks',
    sandboxes: sandboxes
  });
  
  res.send(html);
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
