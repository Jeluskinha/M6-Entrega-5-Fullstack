import { Request, Response} from 'express';
import clientCreateService from '../../services/clients/clientsCreate.service';

const clientCreateController = async (req: Request, res: Response) => {

  try {
    const {name, email, phone, password} = req.body 
    const newClient = await clientCreateService({ name, email, phone, password})
    return res.status(201).send(newClient)

  } catch (error) {
    if(error instanceof Error){
      return res.status(400).send({
        error: error.name,
        message: error.message  
      })
    }
  }
}


export default clientCreateController