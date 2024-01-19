import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const PORT: any = process.env.PORT || 8000;
const DATABASE_URL: any = process.env.DATABASE_URL;

const app: Application = express();

// Middleware
app.use(bodyparser.json());

// Homepage
app.get("/", (req: Request, res: Response) => {
    return res.status(200).send(`<h1>Server Running On Localhost:${PORT}</h1>`);
});

// Routes
import postsRoutes from "./routes/posts.route";
app.use("/", postsRoutes);

// Create Database Connection Using Mongoose
(async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("MongoDB Database Connected Successfully");
    } catch (error) {
        console.log("Unable To Connect MongoDB Database");
        console.log(error);
    }
})();

// Create Server On Localhost:8000
(async () => {
    try {
        await app.listen(PORT);
        console.log(`Server Started On Localhost:${PORT}`);
    } catch (error) {
        console.log(`Unable To Create Server On Localhost:${PORT}`);
        console.log(error);
    }
})();
