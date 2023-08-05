import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
let server: Server

async function connect() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connected successfully')
    server = app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Database connection failed', error)
  }
}

connect()
