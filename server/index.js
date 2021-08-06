import express from "express";
const app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from 'cors';

import employeeRoute from './routes/employee.js'

dotenv.config();

// @ts-ignore
// mongoose.connect('mongodb://localhost:27017/erpDB',
//     { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
//     .then(() => console.log("Connected to MongoDB database successfully..."))
//     .catch((err) => console.log("error to connect with Database :", err))

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("common"));

app.use('/', employeeRoute);

const PORT = process.env.PORT || 7700;

app.listen(PORT, () => {
    console.log(`Backend server is running at port ${PORT}...`);
})