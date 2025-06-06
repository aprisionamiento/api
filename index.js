const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/velocity", (req, res) => {
    res.json({ nombre: "miguel", apellido: "vega" });
});

app.get("/humidity", (req, res) => {
    res.json({ valor: `${50} %`, timestamp: new Date().toISOString() });
});

app.get("/temperature", (req, res) => {
    res.json({ valor: `${10} ºC`, timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});