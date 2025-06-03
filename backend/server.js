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

app.listen(3000, () => console.log('The server is running on port 3000'));

