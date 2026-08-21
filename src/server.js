const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Liveness: only proves the Node process can answer HTTP requests.
// It intentionally does not touch the database.
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Readiness: verifies that the database is reachable.
app.get('/ready', async (req, res) => {
  try {
    await db.query('SELECT 1');
    res.status(200).send('READY');
  } catch (err) {
    console.error('Readiness check failed:', err.message);
    res.status(503).send('NOT READY');
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Orders API' });
});

app.get('/orders', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM orders ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching orders:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Orders API running on port ${port}`);
});
