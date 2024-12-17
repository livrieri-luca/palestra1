const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Servire file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint per la root ("/")
app.get('/', (req, res) => {
  res.send('<h1>Benvenuto alla Palestra Fitness API</h1><p>Visita <a href="/api/gym">/api/gym</a> per i dati della palestra.</p>');
});

// Endpoint per ottenere i dati della palestra dal file statico (data.json)
app.get('/api/gym', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'data.json'); // Percorso completo del file JSON
  
  // Leggiamo il file JSON
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Errore nel recupero dei dati:", err);
      return res.status(500).json({ error: 'Errore nel recupero dei dati' });
    }
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});
