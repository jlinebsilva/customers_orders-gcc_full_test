import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { sequelize } from './Database/connection'
import router from './Routes'

dotenv.config()

const PORT = process.env.PORT

const server = express()
server.use(cors({ origin: "*" }))
server.use(express.json())

server.use(router)


try {
    sequelize.sync().then(() => {
        server.listen(PORT,
            () => {
                console.warn(`== SERVIDOR EM EXECUÇÃO NA PORTA ${PORT} ==`)
                console.info(`http://localhost:${PORT}`)
            }
        )
    })

} catch (error) {
    console.error(`[!] Não foi possível conectar :: ${error}`)
}