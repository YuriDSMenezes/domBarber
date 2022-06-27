import React, { createContext, useContext, useEffect, useState } from 'react';
import { Company as CompanyType } from 'models/types/company';
import { Service as ServiceType } from 'models/types/service';
import { Kit as KitType } from 'models/types/kit';
import { Professional as ProfessionalType } from 'models/types/professional';
import { Product as ProductType } from 'models/types/product';
import { firestoreDb } from 'services/FirestoreDatabase';
import { Company } from 'models/company';
import { useRouter } from 'next/router';
import { Category } from 'models/category';
import { ClientCard } from 'models/types/client';
import { setTheme } from 'hooks';

interface GlobalContextProps {
  states: {
    company: CompanyType;
    services: ServiceType[];
    kits: KitType[];
    professionals: ProfessionalType[];
    products: ProductType[];
    categories: Category[];
    selectedCardPayment: ClientCard;
    cardInfos: { id: string; key: string };
  };
  actions: {
    setCompany: (company: CompanyType) => void;
    setServices: (services: ServiceType[]) => void;
    setKits: (services: KitType[]) => void;
    setProfessionals: (professionals: ProfessionalType[]) => void;
    setProducts: (products: ProductType[]) => void;
    setCategories: (category: Category[]) => void;
    setSelectedCardPayment: (card: ClientCard) => void;
    setCardInfos: (value: any) => void;
  };
}

const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps,
);

const GlobalProvider: React.FC = ({ children }) => {
  const [company, setCompany] = useState<CompanyType>({} as CompanyType);
  const [services, setServices] = useState<ServiceType[]>([] as ServiceType[]);
  const [kits, setKits] = useState<KitType[]>([] as KitType[]);
  const [products, setProducts] = useState<ProductType[]>([] as ProductType[]);
  const [categories, setCategories] = useState<Category[]>([] as Category[]);
  const [cardInfos, setCardInfos] = useState();
  const [professionals, setProfessionals] = useState<ProfessionalType[]>(
    [] as ProfessionalType[],
  );
  const [selectedCardPayment, setSelectedCardPayment] = useState<ClientCard>();
  const {
    query: { companyName },
    isReady,
    pathname,
  } = useRouter();
  useEffect(() => {
    if (!isReady) return;
    if (pathname === '/auth/login') return;
    firestoreDb.company.getSyncWhere({
      wheres: [
        // @ts-ignore
        ['app.url', '==', companyName],
        // @ts-ignore
        ['projectId', '==', 'dombarber'],
      ],
      callback: res => {
        const parsedCompanyData = Object.entries(res?.data?.docs as {}).map(
          // @ts-ignore
          ([id, data]) => Company({ ...data, id, companyId: id }),
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
  }, [isReady]);

  return (
    <GlobalContext.Provider
      value={{
        states: {
          company,
          services,
          professionals,
          products,
          kits,
          categories,
          selectedCardPayment,
          cardInfos,
        },
        actions: {
          setCompany,
          setServices,
          setProfessionals,
          setProducts,
          setKits,
          setCategories,
          setSelectedCardPayment,
          setCardInfos,
        },
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
