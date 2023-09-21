import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { connectDB } from './database'
import sanitizedConfig from './config'
import { commentRouter, postRouter, userRouter } from '../routes'

connectDB()

const app: Application = express()

app.set('port', sanitizedConfig.SERVERPORT || 4000)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)

app.listen(sanitizedConfig.SERVERPORT, () => {
    console.log(`Server running on port: ${sanitizedConfig.SERVERPORT}`)
})