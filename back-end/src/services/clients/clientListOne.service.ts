import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";

const clientListOneService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: clientId });
  if (!client) {
    throw new Error("Client not found.");
  }

  return client;
}

export default clientListOneService