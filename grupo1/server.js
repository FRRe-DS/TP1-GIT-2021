const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

// Security Middlewares
app.use(cors());

// Mount Routes
app.use('/', require('./routes/home'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`🎉🎉 App running on port: ${PORT} 🎉🎉`);
});
