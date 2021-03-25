import express, { Request, Response } from "express";
import { resolve } from "dns";
import { rejects } from "assert";
import SetsModel from "../models/setsModel";
import { getOffset } from "../common/helper";
import { request } from "http";
import { SetResponse } from "../types/sets";

export const SetRouter = express.Router();

SetRouter.get("/", async (req: Request, res: Response) => {
    const setModel = new SetsModel()
    const setResponse: SetResponse = { errno: 1 }
    try {
        const offset = getOffset(Number(req.query._page || 1), Number(req.query._limit || 10))
        const items: any = await setModel.queryByPage(offset, Number(req.query._limit))
        setResponse.errno = 0
        setResponse.data = items
        res.status(200).json(setResponse)
    } catch (e) {
        setResponse.errmsg = e
        res.sendStatus(500).json(setResponse);
    }
})

SetRouter.post("/", async (req: Request, res: Response) => {
    const setModel = new SetsModel()
    const setResponse: SetResponse = { errno: 1 }
    try {
        const id: any = await setModel.addSet(req.body)
        setResponse.errno = 0
        setResponse.data = { id }
        res.status(200).json(setResponse)
    } catch (e) {
        setResponse.errmsg = e
        res.sendStatus(500).json(setResponse);
    }
})

