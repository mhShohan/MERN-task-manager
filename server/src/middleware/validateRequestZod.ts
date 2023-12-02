import { NextFunction, Request, Response } from "express"
import { AnyZodObject, ZodError } from "zod"
import zodErrorSanitize from '../utils/zodErrorSanitize'

const validateRequestZod = (schema: AnyZodObject) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body)
    } catch (error) {
      const errors = zodErrorSanitize(error as ZodError)

      // @TODO modify this two line - you need to follow the best practices and update  
      errors.statusCode = 400
      errors.message = 'User validation failed'
      next(errors)
    }
  }
}


export default validateRequestZod