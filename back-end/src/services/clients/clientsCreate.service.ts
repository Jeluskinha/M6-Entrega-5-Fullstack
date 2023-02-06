import { AppError } from './../../errors/appError';
import { AppDataSource } from '../../data-source';
import { Client } from "../../entities/clients.entity";
import { IClientCreate } from "../../interfaces/clients";
import { hash } from 'bcrypt';
import { v4 as uuid} from 'uuid'

const clientCreateService = async ({name, email, phone, password}: IClientCreate) => {
  const clientRepository = AppDataSource.getRepository(Client)
  const client = await clientRepository.find()

  const emailAlreadyExists = client.find(client => client.email === email)

  if(emailAlreadyExists){
    throw new AppError(400, "Email already exists")
  }

  if(!password){
    throw new AppError(400, "Password are missing data");   
   }

  const hashedPassword = await hash(password, 10)

  const newClient = new Client()
  id: uuid()
  newClient.name = name
  newClient.email = email
  newClient.password = hashedPassword
  newClient.phone = phone
  newClient.created_at = new Date()
  
  clientRepository.create(newClient)
  await clientRepository.save(newClient)

  const response = {
    name,
    email,
    phone,
    created_at: new Date()
  }

  return response
}

export default clientCreateService