import express, { Request, Response } from "express";
import * as orderModel from "../models/orderModel";
import { Order, BasicOrder } from "../types/order";
import { resolve } from "dns";
import { rejects } from "assert";
const orderRouter = express.Router();

// orderRouter.get("/", async (req: Request, res: Response) => {
// orderModel.findAll((err: Error, orders: Order[]) => {
// if (err) {
// return res.status(500).json({ "errorMessage": err.message });
// }
// 
// res.status(200).json({ "data": orders });
// });
// });

// selectAllElements = () => {
// return new Promise((resolve, reject) => {
// 
// })
// }

orderRouter.get("/", async (req: Request, res: Response) => {
    try {
        const result: any = await orderModel.queryAll();
        res.status(200).json({ elements: result[0].name });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})


// orderRouter.post("/", async (req: Request, res: Response) => {
// const newOrder: BasicOrder = req.body;
// orderModel.create(newOrder, (err: Error, orderId: number) => {
// if (err) {
// return res.status(500).json({ "message": err.message });
// }
// 
// res.status(200).json({ "orderId": orderId });
// });
// });
// 
// orderRouter.get("/:id", async (req: Request, res: Response) => {
// const orderId: number = Number(req.params.id);
// orderModel.findOne(orderId, (err: Error, order: Order) => {
// if (err) {
// return res.status(500).json({ "message": err.message });
// }
// res.status(200).json({ "data": order });
// })
// });
// 
// orderRouter.put("/:id", async (req: Request, res: Response) => {
// const order: Order = req.body;
// orderModel.update(order, (err: Error) => {
// if (err) {
// return res.status(500).json({ "message": err.message });
// }
// 
// res.status(200).send();
// })
// });

export { orderRouter };