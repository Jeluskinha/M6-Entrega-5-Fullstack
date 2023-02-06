export interface IClient {
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface IClientCreate {
  name:string
  email: string
  phone: string
  password: string
}

export interface IClientUpdate {
  name?: string;
  phone?: string;
  password?: string;
}
