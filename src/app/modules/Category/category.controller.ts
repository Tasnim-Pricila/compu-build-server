import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/response"
import { ICategory } from "./category.interface"
import { createCategoryService, getCategoryByIdService, getCategoryByNameService, getCategoryService } from "./category.service"
import httpStatus from "http-status"

export const createCategory = catchAsync(async (req: Request, res: Response) => {
    const { ...CategoryData } = req.body
    const result = await createCategoryService(CategoryData)
  
    sendResponse<ICategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category created successfully',
      data: result,
    })
  })
  
  export const getCategoryById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await getCategoryByIdService(id)
  
    sendResponse<ICategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category data retieved successfully',
      data: result,
    })
  })

  export const getCategoryByName = catchAsync(async (req: Request, res: Response) => {
    const { name } = req.params
    const result = await getCategoryByNameService(name)
  
    sendResponse<ICategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category data retieved successfully',
      data: result,
    })
  })
  
  export const getCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await getCategoryService()
 
    sendResponse<ICategory[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category data retieved successfully',
      data: result,
    })
  })