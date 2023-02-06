import { IContactCreate } from './../../interfaces/contacts/index';
import { Request, Response } from "express"
import contactCreateService from '../../services/contacts/contactsCreate.service';

const contactCreateController = async (request: Request, response: Response) => {
  try {
      const { name, email, phone}: IContactCreate  = request.body
      const clientId = request.client.clientId
      const contact = await contactCreateService({name, email, phone, clientId})
      return response.status(201).send(contact)
      
  } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
            error: error.name,
            message: error.message
        })
    }
  }
}

export default contactCreateController