import mongoose from 'mongoose'
import sanitizedConfig from './config'

export const connectDB = async () => {
    const connectionString = `mongodb://${sanitizedConfig.DBHOST}:${sanitizedConfig.DBPORT}/${sanitizedConfig.DATABASE}`
    try {
        const conn = await mongoose.connect(connectionString)
        if (!conn) {
            throw new Error('Connection Error...')
        }
        console.log(`🟢 MongoDB connected:`, conn.connection.host)
    } catch (error) {
        throw new Error('Unexpected Error...')
    }
}