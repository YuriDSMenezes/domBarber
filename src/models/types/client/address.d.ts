export interface ClientAddress {
  name: string;
  main: boolean;

  lat?: number;
  lng?: number;
  city: string;
  state: string;
  street: string;
  number: string;
  zipcode: string;
  district: string;
  shortState: string;
  complement?: string;
}
