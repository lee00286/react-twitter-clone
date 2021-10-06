// Express Server && Auth
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Connect to MongoDB
const config = require("./config/key");
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected...");
}).catch(err => console.log(err));

// Cors
app.use(cors());

// Body Parser && Auth
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Router
app.use('/api/user', require("./routes/user"));
app.use('/api/tweet', require("./routes/tweet"));

// Production Build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
})