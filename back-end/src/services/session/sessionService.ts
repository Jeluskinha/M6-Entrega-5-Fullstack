import { AppError } from './../../errors/appError';
import { ISessionLog } from '../../interfaces/session/index';
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import jwt from "jsonwebtoken";
import { compare } from 'bcrypt';
import "dotenv/config";

async function sessionService({email, password, }: ISessionLog): Promise<string> {
  const clientRepository = AppDataSource.getRepository(Client) 
  const client = await clientRepository.findOneBy({
      email: email    
  }) 

  if(!client){
      throw new AppError(403, 'Invalid email or password')
  }

  const passwordValidation = await compare(password, client.password) 
  if(!passwordValidation){
      throw new AppError(403, 'Invalid email or password')
  }

  
  const token = jwt.sign(
    { email: client.email },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "3d",
      subject: client.id,
    }
  );
  
  return token
}

export default sessionService;