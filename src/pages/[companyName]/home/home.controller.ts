/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useGlobal } from 'hooks/Global';
import { Company } from 'models/company';
import { Professional } from 'models/professional';
import { Kits } from 'models/kits';
import { Product } from 'models/product';
import { useLoading } from 'hooks/Loading';
import { getAllServicesByCompanyId } from 'cases/service';
import { Company as CompanyType } from 'models/types/company';
import { Service } from 'models/service';
import { getProductsByCompanyId } from 'cases/product';
import { setTheme } from 'hooks/Theme';
import { ManifestConfig } from 'hooks/ManifestConfig';
import { getAllProfessionalsByCompanyId } from '../../../cases/professional/getProfessionalsByCompanyId';
import { getAllKitsByCompanyId } from '../../../cases/kit/getAllKitByService';
import { getCompanyByUrl } from '../../../cases/company/getCompanyByUrl';

// type ObjEntriesCompanyData = [id: string, data: CompanyType][];

export const useAppController = () => {
  const { states: globalStates, actions: globalActions } = useGlobal();
  const { actions: loadingActions } = useLoading();

  const {
    query: { companyName },
    isReady,
  } = useRouter();

  const getCompanyData = useCallback(async (): Promise<
    CompanyType | undefined
  > => {
    loadingActions.activeLoading();
    let localCompany = null;
    if (typeof window !== 'undefined') {
      localCompany = localStorage.getItem('@domBarber:company');
    }
    if (isReady) {
      let companyUrl = null;
      if (typeof companyName === 'object') {
        const [url] = companyName;
        companyUrl = url;
      } else {
        companyUrl = companyName;
      }
      if (localCompany && JSON.parse(localCompany).app.url === companyUrl) {
        globalActions.setCompany(JSON.parse(localCompany));
        globalStates.company && loadingActions.deactiveLoading();
        return JSON.parse(localCompany);
      }
      const companyData = await getCompanyByUrl(companyUrl || '');
      // @ts-ignore
      const parsedCompanyData = Object.entries(companyData as {}).map(
        // @ts-ignore
        ([id, data]) => Company({ ...data, id }),
      )[0];

      globalActions.setCompany(parsedCompanyData);
      if (typeof window !== 'undefined') {
        localStorage.setItem(
          '@domBarber:company',
          JSON.stringify(parsedCompanyData),
        );
      }
      globalStates.company && loadingActions.deactiveLoading();
      return parsedCompanyData;
    }
    return undefined;
  }, [isReady]);

  const getServicesCompany = useCallback(async (companyId: string) => {
    const servicesData = await getAllServicesByCompanyId(companyId);
    const parsedServicesData = Object.entries(servicesData as {}).map(
      // @ts-ignore
      ([id, data]) => Service({ ...data, id }),
    );
    globalActions.setServices(parsedServicesData);
  }, []);

  const getProfessionalsCompany = useCallback(async (companyId: string) => {
    const professionalsData = await getAllProfessionalsByCompanyId(companyId);
    const parsedProfessionalsData = Object.entries(professionalsData as {}).map(
      // @ts-ignore
      ([id, data]) => Professional({ ...data, id }),
    );
    globalActions.setProfessionals(parsedProfessionalsData);
  }, []);

  const getKitsCompany = useCallback(async (companyId: string) => {
    const kitsData = await getAllKitsByCompanyId(companyId);
    const parsedKitsData = Object.entries(kitsData as {}).map(
      // @ts-ignore
      ([id, data]) => Kits({ ...data, id }),
    );
    globalActions.setKits(parsedKitsData);
  }, []);

  const getProductsCompany = useCallback(async (companyId: string) => {
    const productsData = await getProductsByCompanyId(companyId);
    const parsedProductsData = Object.entries(productsData as {}).map(
      // @ts-ignore
      ([id, data]) => Product({ ...data, id }),
    );
    globalActions.setProducts(parsedProductsData);
  }, []);

  const OnloadPage = useCallback(async () => {
    const companyResponse = await getCompanyData();
    if (companyResponse) {
      companyResponse.app.theme && setTheme(companyResponse.app.theme);
      ManifestConfig(companyResponse);
      await getServicesCompany(companyResponse.id);
      await getProfessionalsCompany(companyResponse.id);
      await getProductsCompany(companyResponse.id);
      await getKitsCompany(companyResponse.id);
    }
  }, [isReady]);

  useEffect(() => {
    OnloadPage();
  }, [isReady]);

  return {
    states: {},
    actions: {},
  };
};
