import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) return res.sendStatus(401)

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).user = decoded
        next()

    } catch (error) {
        return res.sendStatus(403)
    }
}