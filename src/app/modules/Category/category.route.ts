import express from 'express'
import { createCategory, getCategory, getCategoryById } from './category.controller'
export const categoryRouter = express.Router()

categoryRouter.post('/', createCategory)
categoryRouter.get('/', getCategory)
categoryRouter.get('/:id', getCategoryById)