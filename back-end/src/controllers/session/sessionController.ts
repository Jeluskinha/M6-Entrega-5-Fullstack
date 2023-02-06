import { handleError, AppError } from './../../errors/appError';
import { Request, Response } from "express";
import sessionService from "../../services/session/sessionService";

async function sessionController(request: Request, response: Response) {
      try {
        const client = request.body
        const token = await sessionService(client)
        return response.status(200).json({token})
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, response)
        }
    }
}

export default sessionController;