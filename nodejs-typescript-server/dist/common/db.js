"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = require("./config");
// export const db = mysql.createConnection(config.db);
exports.pool = mysql2_1.default.createPool(config_1.config.db);
