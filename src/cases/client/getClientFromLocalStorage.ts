import { environment } from 'environments/environment';
import api from 'services/api';

export const getClientFromLocalStorage = () => {
  let client;
  if (typeof window !== 'undefined') {
    const localClient = localStorage.getItem('@domBarber:client');
    if (localClient !== null) client = JSON.parse(localClient);
  }
  return client;
};
