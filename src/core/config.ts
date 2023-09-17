import path from 'path'
import * as dotenv from 'dotenv'
import { Config, ENV } from './interfaces'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const getConfig = (): ENV => {
    return {
		SECRET: process.env.SECRET,
		DATABASE: process.env.DATABASE,
		USER: process.env.USER,
		PASSWORD: process.env.PASSWORD,
		SERVERHOST: process.env.SERVERHOST,
		SERVERPORT: process.env.SERVERPORT && Number(process.env.SERVERPORT),
		DBHOST: process.env.DBHOST,
		DBPORT: process.env.DBPORT && Number(process.env.DBPORT)
	}
}

const getSanitizedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
        if (value === undefined) {
            throw new Error(`Missing key ${key} in .env file.`)
        }
    }
    return config as Config
}

const config = getConfig()
const sanitizedConfig = getSanitizedConfig(config)

export default sanitizedConfig