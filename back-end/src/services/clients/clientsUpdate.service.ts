import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { IClientUpdate } from "../../interfaces/clients/index";
import { instanceToPlain } from 'class-transformer' 

async function clientUpdateService(id: string, data: IClientUpdate): Promise<Client> {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id });

  if (!client) {
    throw new Error("Email Already Exists")
  }

  await clientRepository.update(
    client!.id,
    {
      ...instanceToPlain(client),
      ...data,
    }
  );
  const clientResponse = await clientRepository.findOneBy({ id });

  return clientResponse!
}

export default clientUpdateService;
