import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { Customer } from "../Models/Customer";

export const register = async (req: Request, res: Response) => {
    const { password, ...rest } = req.body

    const hash = await bcrypt.hash(password, 10)
    const user = await Customer.create({ ...rest, password: hash })

    res.json(user)
}


export const login = async (req: Request, res: Response) => {
    const { login, password } = req.body

    const customer = await Customer.findOne({ where: { login } });

    if (!customer) return res.status(404).json({ msg: "Customer not found" });
    const valid = await bcrypt.compare(password, customer.getDataValue("password"));

    if (!valid) return res.status(401).json({ msg: "Invalid password" });
    const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET!, {
        expiresIn: "1d",
    });

    res.json({ token });
}