import dotenv from "dotenv";

dotenv.config();

const config = {
    PORT : process.env.PORT || 5000,
    DB_URL : process.env.DB_URL || "mongodb://localhost:27017/E-Comm"
}


export default config
