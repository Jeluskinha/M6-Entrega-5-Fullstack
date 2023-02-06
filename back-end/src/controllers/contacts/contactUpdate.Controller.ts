import { Request, Response } from "express";
import contactUpdatedService from "../../services/contacts/contacts.Update.service";

const contactUpdatedController = async (request: Request, response: Response) => {
  try {
    const clientId = request.client.clientId;
    const contactId = request.params.id;
    const data = request.body
    const contactUpdated = await contactUpdatedService(clientId, contactId, data)

    return response.json({
      statusCode: 200,
      message: "Success",
      contact: contactUpdated,
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

export default contactUpdatedController
