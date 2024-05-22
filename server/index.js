import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import User from './route/user.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 2000;
const URI = "mongodb+srv://dhurir163:Rohit%401223@cluster0.ggspzxv.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Log the URI to ensure it is being read correctly
console.log('MongoDB URI:', URI);

app.use(cors({
    origin: ["https://bookstore1-ten.vercel.app"], // frontend link
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

connectToDatabase();

app.get("/", (req, res) => {
    res.json("Hello");
});

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", User);

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../client/dist')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
