import express from 'express'
import { createComponent, deleteComponentById, getComponent, getComponentById, updateComponentById } from './component.controller'
export const componentRouter = express.Router()

componentRouter.post('/', createComponent)
componentRouter.get('/', getComponent)
componentRouter.get('/:id', getComponentById)
componentRouter.delete('/:id', deleteComponentById)
componentRouter.patch('/:id', updateComponentById)