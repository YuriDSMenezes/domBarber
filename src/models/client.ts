import { Client as ClientType } from './types/client';

export const Client = (client: ClientType): ClientType => ({
  cpf: client?.cpf || '',
  name: client.name,
  genre: client?.genre || '',
  email: client?.email || '',
  image: client?.image || '',
  dateBirth: client?.dateBirth,
  auth: {
    authIds: client?.auth?.authIds || [],
    email: client?.auth?.email,
    token: client?.auth?.token,
    password: client?.auth?.password,
    lastAccess: client?.auth?.lastAccess,
    firstAccess: client?.auth?.firstAccess,
    authTypes: client?.auth?.authTypes || [],
    emailVerified: client?.auth?.emailVerified || false,
  },
  social: {
    id: client?.social?.id || '',
    block: client.social.block || false,
    url: client?.social?.url || '',
  },
  terms: client.terms || [],
  cards: client.cards || [],
  phones: client.phones || [],
  addresses: client.addresses || [],

  id: client?.id || '',
  projectId: client?.projectId,
  companyId: client?.companyId,
  createdAt: client?.createdAt || new Date(),
  updatedAt: client?.updatedAt || undefined,
  deletedAt: client?.deletedAt || undefined,
});
