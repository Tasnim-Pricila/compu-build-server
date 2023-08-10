import { z } from 'zod'
import { userRoleEnum } from './user.constant'

export const updateUserZodSchema = z.object({
  body: z.object({
    role: z.enum([...userRoleEnum] as [string, ...string[]]).optional(),
  }),
})
