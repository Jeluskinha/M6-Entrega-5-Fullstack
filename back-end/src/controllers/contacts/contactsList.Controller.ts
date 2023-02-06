import { Request, Response } from "express"
import contactListService from "../../services/contacts/contactsList.service"

const contactListController = async (request: Request,response: Response) => {
  try {
    const clientId: string = request.client.clientId;
    const clientContacts = await contactListService(clientId);
    return response.json({
      statusCode: 200,
      message: "Success",
      contacts: clientContacts,
    });
  } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
            error: error.name,
            message: error.message
        })
    }
  }
}

export default contactListController