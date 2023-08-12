import express from 'express'
import { createCategory, getCategory, getCategoryById, getCategoryByName } from './category.controller'
export const categoryRouter = express.Router()

categoryRouter.post('/', createCategory)
categoryRouter.get('/', getCategory)
categoryRouter.get('/:id', getCategoryById)
categoryRouter.get('/choose/:name', getCategoryByName)
