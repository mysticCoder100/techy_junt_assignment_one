import "dotenv/config"
import mongoose from "mongoose";

export default class Database{
    static #connection = process.env.MONGODB_URI;

    static async connect() {
        try {
            await mongoose.connect(this.#connection);
            console.log("Connected to Database");
        } catch (e) {
            console.error(e);
        }
    }

}