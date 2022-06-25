import nookies from 'nookies';

export const getCookies = (context: any) => {
  const cookies = nookies.get(context);
  const token = cookies['@domBarber:token'];
  const client = cookies['@domBarber:client'];
  const company = cookies['@domBarber:company'];
  const parsedClient = JSON.parse(client);
  const companyId = company.replace(/"/g, '');
  const tokenWithoutQuotes = token.replace(/"/g, '');
  const paramsGetAuth = new URLSearchParams([['companyId', companyId]]);

  return {
    parsedClient,
    tokenWithoutQuotes,
    paramsGetAuth,
  };
};
