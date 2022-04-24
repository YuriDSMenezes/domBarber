/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useGlobal } from 'hooks/Global';
import { Company } from 'models/company';
import { Professional } from 'models/professional';
import { useLoading } from 'hooks/Loading';
import { getAllServicesByCompanyId } from 'cases/service';
import { Company as CompanyType } from 'models/types/company';
import { Service } from 'models/service';
import { getAllProfessionalsByCompanyId } from '../../../cases/professional/getProfessionalsByCompanyId';
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
    if (isReady) {
      const companyData = await getCompanyByUrl(
        companyName ? companyName[0] : '',
      );
      // @ts-ignore
      const parsedCompanyData = Object.entries(companyData as {}).map(
        // @ts-ignore
        ([id, data]) => Company({ ...data, id }),
      )[0];
      globalActions.setCompany(parsedCompanyData);
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

  const OnloadPage = useCallback(async () => {
    const companyResponse = await getCompanyData();
    if (companyResponse) {
      await getServicesCompany(companyResponse.id);
      await getProfessionalsCompany(companyResponse.id);
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
