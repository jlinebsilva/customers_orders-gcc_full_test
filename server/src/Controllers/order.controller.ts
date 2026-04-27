import type { Request, Response } from "express";
import { Order } from "../Models/Order";

export const createOrder = async (req: Request, res: Response) => {
    const { description, userId } = req.body;
    const order = await Order.create({ description, userId });
    
    res.json(order);
}

export const listOrders = async (req: Request, res: Response) => {
    const userId = req.query.userId;
    const where = userId ? { userId } : {};
    const orders = await Order.findAll({ where });

    res.json(orders);
}