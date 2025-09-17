import { AppError } from '@/common/domain/errors/app-error'
import { Request, Response, NextFunction } from 'express'

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message })
  }

  return res
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' })
}
