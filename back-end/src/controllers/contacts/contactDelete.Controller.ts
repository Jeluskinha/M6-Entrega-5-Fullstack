import { Request, Response } from "express"
import contactsDeleteService from "../../services/contacts/contactsDelete.service";

const contactsDeleteController = async (request:Request, response: Response) => {
  try {
    const clientId: string = request.client.clientId;
    const contactId: string = request.params.id;
    const contactDeleted = await contactsDeleteService(contactId, clientId);
    return response
      .status(204)
      .json({ statusCode: 204, message: "Success", contact: contactDeleted });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
          error: error.name,
            message: error.message
        })
    }
  }
}

export default contactsDeleteController