import clientUpdateService from "../../services/clients/clientsUpdate.service";
import { Request, Response } from "express";
import { IClientUpdate } from '../../interfaces/clients/index';

async function clientUpdateController(request: Request, response: Response) {
    try {
        const data: IClientUpdate = request.body
        const id = request.params.id
        const clienteUpdate = await clientUpdateService(id, data)
        const { password, ...clientResponse} = clienteUpdate
        return response.json(clientResponse)
    } catch (error) {
      if(error instanceof Error){
        return response.status(400).send({
          error: error.name,
          message: error.message  
        })
      }
    }
}

export default clientUpdateController;