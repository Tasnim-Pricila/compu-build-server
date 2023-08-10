import express from 'express'
import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
} from './user.controller'

export const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.get('/:id', getUserById)
userRouter.patch('/:id', updateUser)
