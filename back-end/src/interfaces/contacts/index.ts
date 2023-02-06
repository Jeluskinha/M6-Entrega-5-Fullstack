export interface IContactCreate {
  name: string;
  email: string;
  phone: string;
  clientId: string;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}