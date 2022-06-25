export const createHeaders = (
  tokenWithoutQuotes: string,
  parsedClient: any,
) => ({
  Authorization: `Bearer ${tokenWithoutQuotes}`,
  ProjectId: parsedClient?.projectId,
});
