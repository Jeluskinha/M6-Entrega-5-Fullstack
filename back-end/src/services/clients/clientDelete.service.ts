import { AppDataSource } from './../../data-source';
import { Client } from './../../entities/clients.entity';

const clientDeleteService = async (id: string): Promise<string> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientDeleted = await clientRepository.findOneBy({ id });
  console.log(clientDeleted)

  if (!clientDeleted) {
    throw new Error("Client is not found")
  }

  await clientRepository.delete(clientDeleted.id);

  return "Client deleted with success";
}

export default clientDeleteService