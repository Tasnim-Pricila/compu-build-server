import express from 'express'
import { createComponent, deleteComponentById, getComponent, getComponentById, updateComponentById } from './component.controller'
export const ComponentRouter = express.Router()

ComponentRouter.post('/', createComponent)
ComponentRouter.get('/', getComponent)
ComponentRouter.get('/:id', getComponentById)
ComponentRouter.delete('/:id', deleteComponentById)
ComponentRouter.patch('/:id', updateComponentById)