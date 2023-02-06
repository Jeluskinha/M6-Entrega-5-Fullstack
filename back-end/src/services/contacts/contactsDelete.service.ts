import { AppDataSource } from './../../data-source';
import { AppError } from './../../errors/appError';
import { Client } from './../../entities/clients.entity';
import { Contact } from './../../entities/contact.entity';
import { validate as validation } from "uuid";


const contactsDeleteService = async (contactId: string, clientId: string) => {

  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);
  
  if (!validation(contactId)) throw new AppError(400, "Invalid uuid param.");

  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) throw new AppError(404, "Client not found.");

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
      client: {
        id: clientId,
      },
    },
  });
  if (!contact) throw new AppError(404, "Contact not found.");

  await contactRepository.delete(contact.id);
  return "Contact deleted.";
}

export default contactsDeleteService