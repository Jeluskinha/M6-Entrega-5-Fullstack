import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/appError';
import { Contact } from '../../entities/contact.entity';
import { Client } from '../../entities/clients.entity';
import { IContactCreate } from '../../interfaces/contacts/index';

const contactListService = async (clientId: string): Promise<Contact[]> =>{
  const contactsRepository = AppDataSource.getRepository(Contact);
  const clientsRepository = AppDataSource.getRepository(Client);

  const client = await clientsRepository.findOneBy({ id: clientId });
  if (!client) throw new AppError(404, "Client not found.");

  const contacts = await contactsRepository.find({
    where: {
      client: {
        id: client.id,
      },
    },
  });
  if (!contacts) return [];

  return contacts;

}

export default contactListService