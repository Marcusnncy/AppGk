require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
const dbUri = process.env.MONGODB_URI;
if (!dbUri) {
    console.error('MONGODB_URI is not defined in the .env file');
    process.exit(1); // Dừng ứng dụng nếu không có URI
}

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
// Routes
app.use('/users', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
