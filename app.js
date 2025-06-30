import Database from "./src/Config/Database.js";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import {apiRoutes} from "./src/Routes/ApiRoutes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"))

app.use("/api", apiRoutes);

app.use((req,res,next) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
})


app.listen(process.env.PORT,async () => {
    await Database.connect();
    console.log(`Server is running on port ${process.env.PORT}`);
});
