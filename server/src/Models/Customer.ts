import { DataTypes, Model } from "sequelize";
import type { Optional } from "sequelize";
import { sequelize } from "../Database/connection";

interface CustomerAttributes {
    id: number;
    cpf: string;
    rg: string;
    name: string;
    age?: number;
    login: string;
    email: string;
    password: string;
    deletedAt?: Date;
}

interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id' | 'deletedAt'> {}

export class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
    declare id: number;
    declare cpf: string;
    declare rg: string;
    declare name: string;
    declare age?: number;
    declare login: string;
    declare email: string;
    declare password: string;
    declare deletedAt?: Date;
}

Customer.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        cpf: { type: DataTypes.STRING, allowNull: false },
        rg: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        age: { type: DataTypes.INTEGER },
        login: { type: DataTypes.STRING, allowNull: false, unique: true },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        deletedAt: { type: DataTypes.DATE },
    },

    {
        sequelize,
        modelName: 'customer',
        paranoid: true
    }
)