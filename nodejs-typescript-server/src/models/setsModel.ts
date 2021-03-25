import { pool } from "../common/db";
import { Sets } from "../types/sets";
import { OkPacket } from "mysql2";


export default class SetsModel {

    queryByPage = (offSet: number, pageNum: number) => {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT * FROM yanmeng LIMIT ?,?`
            pool.query(queryString, [offSet, pageNum], (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }

    addSet = (sets: Sets) => {
        return new Promise((resolve, reject) => {
            const queryString = `INSERT INTO yanmeng (setname, typecode, creator, ifrun, createtime) VALUES (?, ?, ?, ?, ?)`
            const {
                setname,
                typecode,
                creator,
                ifrun,
                createtime
            } = sets
            pool.query(queryString, [setname, typecode, creator, ifrun, createtime], (err, res: any) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res.insertId);
            });
        });

    }
}
