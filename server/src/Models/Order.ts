import { DataTypes, Model } from "sequelize";
import { sequelize } from "../Database/connection";
import { Customer } from "./Customer";

export class Order extends Model { }

Order.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        description: { type: DataTypes.STRING },
        userId: { type: DataTypes.INTEGER },
    },

    {
        sequelize,
        modelName: "orders"
    }
)

Customer.hasMany(Order)
Order.belongsTo(Customer)