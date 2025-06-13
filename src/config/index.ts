import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, "..", "..", ".env") })

export default {
    logDir: process.env.logDir || './logs',
    isDev: process.env.NODE_ENV === 'development'

}