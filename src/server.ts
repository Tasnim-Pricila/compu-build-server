import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
// let server

async function connect() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connected successfully')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const server = app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Database connection failed', error)
  }
}

connect()
