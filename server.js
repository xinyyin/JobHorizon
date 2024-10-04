import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import {body, validationResult} from 'express-validator';

//routers
import router from "./routes/jobRouter.js";
app.use("/api/v1/jobs", router);

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/api/v1/test", 
    [body('name').notEmpty().withMessage('name is required')], 
    (req, res, next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage = errors.array().map((error)=>error.msg)
            return res.status(400).json({errors:errorMessage})
        }
        next();
    },
    (req, res) => { 
    const {name} = req.body
    res.json({ msg:`hello ${name}` });
});  

app.use("/api/v1/jobs", router);

//Not Found Middleware
app.use("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
});

//ERROR Middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5200;
try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
});
} catch (error) {
    console.log(error);
    process.exit(1);
}
