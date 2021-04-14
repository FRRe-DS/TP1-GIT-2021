const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());

// Security Middlewares
app.use(cors());

// Mount Routes
app.use('/', require('./routes/home'));

// Static folder
app.use(express.static(path.join(__dirname, 'client')));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`🎉🎉 App running on port: ${PORT} 🎉🎉`);
});
