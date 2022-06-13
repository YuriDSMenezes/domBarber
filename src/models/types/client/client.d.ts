import { BaseTypes } from '../base/index.d';
import {
  ClientAddress,
  ClientAuth,
  ClientCard,
  ClientPhone,
  ClientSocialParam,
  ClientTerm,
} from './index';

export interface Client extends BaseTypes {
  cpf?: string;
  name: string;
  genre?: Genre;
  email?: string;
  image?: string;
  dateBirth?: Date;
  auth?: ClientAuth;
  social: ClientSocialParam;

  terms: ClientTerm[];
  cards: ClientCard[];
  phones: ClientPhone[];
  addresses: ClientAddress[];
}
