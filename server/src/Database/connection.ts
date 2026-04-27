import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config()

const sequelize_DBCheckBeforeConnection = new Sequelize(
    'postgres',
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST!,
        dialect: 'postgres',
        logging: false
    }
)

async function createDatabaseIfNotExists() {
    try {
        await sequelize_DBCheckBeforeConnection.authenticate()
        console.info("\n🔵 Conectado ao servidor PostgreSQL\n")

        await sequelize_DBCheckBeforeConnection.query(`CREATE DATABASE ${process.env.DB_NAME}`)
        console.info(`\n🟢 Banco de dados "${process.env.DB_NAME}" criado com sucesso\n`)
        
    } catch (err: any) {
        if (err.message.includes('already exists')) {
            console.info(`\n🟢 Banco de dados "${process.env.DB_NAME}" já existe\n`)
        } else {
            console.error(`\n🔴 Erro ao criar banco de dados: ${err.message}\n`)
        }

    } finally {
        await sequelize_DBCheckBeforeConnection.close()
    }
}

await createDatabaseIfNotExists()

export const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USER!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOST!,
        dialect: 'postgres',
        logging: false
    }
)

sequelize.authenticate().then((function () {
    console.info("\n🟢 Banco de dados conectado com sucesso\n")

})).catch(function (err) {
    console.error(`\n🔴 Não foi possível conectar no banco de dados = ${err}\n`)
})