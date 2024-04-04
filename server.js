require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});