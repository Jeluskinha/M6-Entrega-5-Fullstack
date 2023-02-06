import { AppError } from './../errors/appError';
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'


export const authMiddleware= (request: Request, response: Response, next: NextFunction) => {
  try {
    let token = request.headers.authorization
    if (!token) {
      throw new AppError(403, "Missing authorization headers")
    };
    token = token.split(" ")[1];

    jwt.verify(
      token,
      process.env.SECRET_KEY as string,
      (error: any, decoded: any) => {
        if(error){
            return response.status(401).json({
                message: 'Invalid token'
            })
        }

        request.client = {
          clientId: decoded.sub,
        };

        return next();
      });

  } catch (error) {
    return response.status(401).json({message: "Invalid Token"})
  }
}

export default authMiddleware
