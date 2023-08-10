import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/response'
import { IUser } from './user.interface'
import {
  createUserService,
  getUserByIdService,
  getUserService,
  updateUserService,
} from './user.service'
import httpStatus from 'http-status'

export const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await getUserService()

  sendResponse<IUser[] | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrived successfully',
    data: result,
  })
})

export const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body
  const result = await createUserService(userData)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

export const getUserById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await getUserByIdService(id)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User data retieved successfully',
      data: result,
    })
  }
)

export const updateUser = catchAsync(
  catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedData = req.body
    const result = await updateUserService(id, updatedData)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User updated successfully',
      data: result,
    })
  })
)
