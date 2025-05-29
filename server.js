const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.post('/save', (req, res) => {
  const { answer } = req.body;
  const logPath = path.join(__dirname, 'answers', 'text.txt');
  const logLine = `${new Date().toISOString()} — Ответ: ${answer}\n`;
  fs.appendFileSync(logPath, logLine);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
