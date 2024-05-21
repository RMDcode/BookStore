import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import userRoute from './route/user.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 2000;
const URI = "mongodb+srv://dhurir163:Rohit%401223@cluster0.ggspzxv.mongodb.net/myDatabase?retryWrites=true&w=majority";

// Log the URI to ensure it is being read correctly
console.log('MongoDB URI:', URI);

app.use(cors({
    origin: ["https://book-store-frontend-beige-six.vercel.app"], // frontend link
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
app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});


app.get("/",(req,res)=>{
    res.json("Hello");
})

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
