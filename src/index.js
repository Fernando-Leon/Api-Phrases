const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

require("dotenv").config();
const phraseRoutes = require('./routes/phrase');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 9000;

// Middleware

app.use(express.json());
app.use('/api', phraseRoutes);

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
})

//MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log("Server is running on port", port)
});

// https://localhost:9000