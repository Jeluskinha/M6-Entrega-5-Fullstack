import { Request, Response } from "express"
import clientListOneService from "../../services/clients/clientListOne.service"

const clientListOneController = async (request: Request, response: Response) => {
  try {
    const clientId = request.client.clientId
    const client = await clientListOneService(clientId)
    return response.status(200).send(client)

  } catch (error) {

    if (error instanceof Error) {
      
      return response.status(401).send({
        "error": error.name,
        "message": error.message
      })
    }
  }
}

export default clientListOneController