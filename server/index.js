import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import User from './route/user.route.js';

const app = express();
app.use(cors({
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}
));
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 2000;
const URI = process.env.MongoDBURI;

// Log the URI to ensure it is being read correctly
console.log('MongoDB URI:', URI);

// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

connectToDatabase();

app.get("/",(req,res)=>{
    res.json("Hello");
})

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", User);

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
