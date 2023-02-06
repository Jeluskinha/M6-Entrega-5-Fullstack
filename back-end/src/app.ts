import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express"
import { AppError } from "./errors/appError"
import clientRoutes from './routes/clients.routes'; 
import sessionRoutes from './routes/sessions.routes';
import contactsRoutes from "./routes/contacts.routes";

const app = express();

app.use(express.json());

app.use('/client', clientRoutes)
app.use('/session', sessionRoutes)
app.use('/contacts', contactsRoutes)

app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
  if(error instanceof AppError){
      return response.status(error.statusCode).json({
          status: "error",
          message: error.message
      })
  }
  console.error(error)
  return response.status(500).json({
      status: "error",
      message: "Internal server error"
  })
})

app.listen(3000);

