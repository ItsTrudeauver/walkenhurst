/* server.js */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/header', (req, res) => {
    res.sendFile(path.join(__dirname, 'components', 'header.html'));
});

app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, 'components', 'footer.html'));
});

app.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname, 'components', 'navbar.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


