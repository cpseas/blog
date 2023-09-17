import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { connectDB } from './database'
import sanitizedConfig from './config'

connectDB()

const app: Application = express()

app.set('port', sanitizedConfig.SERVERPORT || 4000)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.listen(sanitizedConfig.SERVERPORT, () => {
    console.log(`Server running on port: ${sanitizedConfig.SERVERPORT}`)
})