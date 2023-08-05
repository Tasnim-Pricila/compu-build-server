import { ZodError, ZodIssue } from 'zod'
import { IGenericErrorResponse } from '../interfaces/response'
import { IGenericErrorMessage } from '../interfaces/errorMessage'

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })

  const statusCode = 500
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleZodError
