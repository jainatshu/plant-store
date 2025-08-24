const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const plantRoutes = require('./routes/plants');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: '*',  // your frontend URL
    
    credentials: true, // if you're using cookies / auth headers
  })
);



app.use(express.json());
app.use('/api/auth', authRoutes);


// Routes
app.use('/api/plants', plantRoutes);


// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/plantstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log(err));


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});