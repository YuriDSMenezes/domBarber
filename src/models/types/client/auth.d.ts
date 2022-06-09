import { AuthType } from './authType';

export interface ClientAuth {
  authIds: string[];
  email?: string;
  token?: string;
  password?: string;
  lastAccess?: Date;
  firstAccess?: Date;
  authTypes: AuthType[];
  emailVerified: boolean;
}
