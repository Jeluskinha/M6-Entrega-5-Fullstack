import { Request, Response} from 'express';
import clientListService from '../../services/clients/clientsList.service';

const clientListController = async (req: Request, res: Response) => {

  try {
    const clients = await clientListService()
    return res.send(clients)
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).send({
        error: error.name,
        message: error.message  
      })
    }
  }
}


export default clientListController