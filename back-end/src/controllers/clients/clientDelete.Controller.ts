import { Request, Response } from "express"
import clientDeleteService from "../../services/clients/clientDelete.service"

const clientDeleteControler = async (request: Request, response: Response) => {
  try {
      const id = request.params.id
      const deleteClient = await clientDeleteService(id)
      return response.status(204).json({
          message: deleteClient
      })
  } catch (error) {
      if (error instanceof Error) {
          return response.status(400).json({
              error: error.name,
              message: error.message
          })
      }
  }
}

export default clientDeleteControler