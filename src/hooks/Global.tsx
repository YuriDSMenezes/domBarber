import React, { createContext, useContext, useEffect, useState } from 'react';
import { Company as CompanyType } from 'models/types/company';
import { Service as ServiceType } from 'models/types/service';
import { Professional as ProfessionalType } from 'models/types/professional';
import { Product as ProductType } from 'models/types/product';
import { firestoreDb } from 'services/FirestoreDatabase';
import { useRouter } from 'next/router';
import { Company } from 'models/company';
import { setTheme } from './Theme';

interface GlobalContextProps {
  states: {
    company: CompanyType;
    services: ServiceType[];
    professionals: ProfessionalType[];
    products: ProductType[];
  };
  actions: {
    setCompany: (company: CompanyType) => void;
    setServices: (services: ServiceType[]) => void;
    setProfessionals: (professionals: ProfessionalType[]) => void;
    setProducts: (products: ProductType[]) => void;
  };
}

const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps,
);

const GlobalProvider: React.FC = ({ children }) => {
  const [company, setCompany] = useState<CompanyType>({} as CompanyType);
  const [services, setServices] = useState<ServiceType[]>([] as ServiceType[]);
  const [products, setProducts] = useState<ProductType[]>([] as ProductType[]);
  const [professionals, setProfessionals] = useState<ProfessionalType[]>(
    [] as ProfessionalType[],
  );
  const {
    query: { companyName },
    isReady,
  } = useRouter();

  useEffect(() => {
    firestoreDb.company.getSyncWhere({
      wheres: [
        // @ts-ignore
        ['app.url', '==', 'ps1'],
        // @ts-ignore
        ['projectId', '==', 'dombarber'],
      ],
      callback: res => {
        const parsedCompanyData = Object.entries(res?.data?.docs as {}).map(
          // @ts-ignore
          ([id, data]) => Company({ ...data, id }),
        )[0];
        setCompany(parsedCompanyData);
        setTheme(parsedCompanyData?.app?.theme);
        if (typeof window !== 'undefined') {
          localStorage.setItem(
            '@domBarber:company',
            JSON.stringify(parsedCompanyData),
          );
        }
      },
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        states: { company, services, professionals, products },
        actions: { setCompany, setServices, setProfessionals, setProducts },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = (): GlobalContextProps => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobal must be used within an GlobalProvider');
  }

  return context;
};

export { GlobalProvider, useGlobal };
