import { AppDataSource } from './../../data-source';
import { AppError } from './../../errors/appError';
import { Contact } from './../../entities/contact.entity';
import { Client } from './../../entities/clients.entity';
import { IContactCreate } from './../../interfaces/contacts/index';

const contactCreateService = async ({name, email, phone, clientId}: IContactCreate): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) throw new AppError(404, "Client not found.");

  const newContact = contactRepository.create({
    name,
    email,
    phone,
    client: client,
  });

  await contactRepository.save(newContact);
  return newContact;

}

export default contactCreateService