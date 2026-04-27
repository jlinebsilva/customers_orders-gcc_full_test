import type { Request, Response } from "express";
import { Customer } from "../Models/Customer";

export const updateCustomer = async (req: Request, res: Response) => {
  const id = req.params.id
  await Customer.update(req.body, { where: { id } })

  res.json({ msg: "Updated" })
}

export const deleteCustomer = async (req: Request, res: Response) => {
  const id = req.params.id
  await Customer.destroy({ where: { id } })

  res.json({ msg: "Deleted" })
}

export const listCustomer = async (_: Request, res: Response) => {
  const customers = await Customer.findAll()
  res.json(customers)
}