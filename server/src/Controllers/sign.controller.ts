import bcrypt from "bcryptjs";
import crypto from 'crypto';
import { config } from 'dotenv';
import type { Request, Response } from "express";
import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { Customer } from "../Models/Customer";

config();

let JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    JWT_SECRET = crypto.randomBytes(32).toString('hex');

    const envPath = path.join(process.cwd(), '.env');
    fs.appendFileSync(envPath, `\nJWT_SECRET=${JWT_SECRET}\n`);
}

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
    const token = jwt.sign({ id: customer.id }, JWT_SECRET!, {
        expiresIn: "1d",
    });

    res.json({ token })
}