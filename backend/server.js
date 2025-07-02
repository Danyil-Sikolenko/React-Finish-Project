const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const DATA_FILE = './db.json'; 

// Чтение данных
app.get('/data', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Data read error');
        res.json(JSON.parse(data));
    });
});

// Добавление новых данных
app.post('/data', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Data read error');

        let jsonData = JSON.parse(data);
        jsonData.destination.push(req.body); // Добавление в массив
        fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) return res.status(500).send('Error writing data');
            res.send('Data added successfully');
        });
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('The server is running on port 3000'));





// API поиска в destination
app.get('/search/destination', (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).send('Enter search query');

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
        
        const jsonData = JSON.parse(data);
        const results = jsonData.destination.filter(item =>
            item.label.toLowerCase().includes(query.toLowerCase())
        );

        res.json(results);
    });
});

// API поиска в hotels
app.get('/search/hotels', (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).send('Enter search query');

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading data');
        
        const jsonData = JSON.parse(data);
        const results = jsonData.hotels.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.city.toLowerCase().includes(query.toLowerCase())
        );

        res.json(results);
    });
});

app.get('/cities', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading data');

    const jsonData = JSON.parse(data);
    const cities = [...new Set(jsonData.hotels.map(h => h.city).filter(Boolean))];
    res.json(cities);
  });
});



app.get("/data/:id", async (req, res) => {
    const hotelId = req.params.id;

    try {
        fs.readFile(DATA_FILE, "utf8", (err, data) => {
            if (err) return res.status(500).json({ error: "Server error" });

            const jsonData = JSON.parse(data);
            const hotel = jsonData.hotels.find(h => String(h.id) === String(hotelId));

            if (!hotel) {
                return res.status(404).json({ error: "Hotel not found" });
            }

            res.json(hotel);
        });
    } catch (error) {
        console.error("Server error", error);
        res.status(500).json({ error: "Server error" });
    }
});



////////////////////////////////////////////////////////////////////////////////////
const users = [];

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: 'User exists' });

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    registeredHotels: []
  };
  users.push(newUser);
  res.status(201).json({ id: newUser.id, name: newUser.name, token: `${newUser.id}` });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  res.json({ id: user.id, name: user.name, token: `${user.id}` });
});

///////////////////////////////////////////////////////////////////////////////////





