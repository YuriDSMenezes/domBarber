import React, { createContext, useContext, useState } from 'react';
import { Company as CompanyType } from 'models/types/company';
import { Service as ServiceType } from 'models/types/service';
import { Professional as ProfessionalType } from 'models/types/professional';
import { Product as ProductType } from 'models/types/product';

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
