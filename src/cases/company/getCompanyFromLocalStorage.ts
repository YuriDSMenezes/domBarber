import { Company } from 'models/types/company';

export const getCompanyFromLocalStorage = () => {
  let company;
  if (typeof window !== 'undefined') {
    const localCompany = localStorage.getItem('@domBarber:company');
    if (localCompany !== null) {
      company = JSON.parse(localCompany);
    }
  }
  return company as Company;
};
