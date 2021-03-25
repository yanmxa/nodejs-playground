import * as dotenv from "dotenv";
dotenv.config();

export const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        connectionLimit: process.env.DB_POOL_SIZE as any
    },
    pageSize: process.env.PAGE_SIZE,
};
