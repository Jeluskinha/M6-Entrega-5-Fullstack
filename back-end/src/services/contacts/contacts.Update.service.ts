import { AppError } from './../../errors/appError';
import { AppDataSource } from './../../data-source';
import { Contact } from './../../entities/contact.entity';
import { Client } from './../../entities/clients.entity';
import { IContactUpdate } from './../../interfaces/contacts/index';
import { validate as validation } from "uuid";

const contactUpdatedService = async (clientId:string, contactId: string, data: IContactUpdate):Promise<Contact> =>{
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  if (!validation(contactId)) throw new AppError(400, "Invalid uuid param.");

  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) throw new AppError(404, "Client not found.");

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
      client: {
        id: client.id,
      },
    },
  });
  if (!contact) throw new AppError(404, "Contact not found.");

  await contactRepository.update(contact.id, {
    email: data.email ? data.email : contact.email,
    name: data.name ? data.name : contact.name,
    phone: data.phone ? data.phone : contact.phone,
  });

  const contactReturn = await contactRepository.findOneBy({ id: contact.id });

  return contactReturn!;
}

export default contactUpdatedService