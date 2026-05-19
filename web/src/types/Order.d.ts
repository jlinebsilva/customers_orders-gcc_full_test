import type { Customer_Types } from "./Customer"


export type Order_Types = {
    id: number
    description: string
    userId: Customer_Types
}