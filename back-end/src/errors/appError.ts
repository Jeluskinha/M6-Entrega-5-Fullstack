import { Response } from 'express'

export class AppError extends Error {
    statusCode

    constructor(statusCOde: number, message: string){
        super()
        this.statusCode = statusCOde
        this.message = message
    }
}

export const handleError = (error: AppError, response: Response) => {
    const { statusCode, message } = error

    return response.status(statusCode).json({
        status: "error",
        statusCode,
        message
    })
}