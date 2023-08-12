import { ICategory } from "./category.interface"
import { Category } from "./category.model"

export const createCategoryService = async (
    payload: ICategory
  ): Promise<ICategory | null> => {
    const result = await Category.create(payload)
    return result
  }
  
  export const getCategoryByIdService = async (
    id: string
  ): Promise<ICategory | null> => {
    const result = await Category.findById(id)
    return result
  }
  export const getCategoryByNameService = async (
    name: string
  ): Promise<ICategory | null> => {
    const result = await Category.findOne({name})
    // console.log(result);
    return result
  }
  
  export const getCategoryService = async (): Promise<ICategory[] | null> => {
    const result = await Category.find({})
    return result
  }