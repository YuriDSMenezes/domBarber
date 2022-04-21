/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useGlobal } from 'hooks/Global';
import { Company } from 'models/company';
import { useLoading } from 'hooks/Loading';
import { getCompanyByUrl } from '../../cases/company/getCompanyByUrl';

// type ObjEntriesCompanyData = [id: string, data: CompanyType][];

export const useHomeController = () => {
  const { actions: globalActions } = useGlobal();
  const { actions: loadingActions } = useLoading();

  const {
    query: { companyName },
    isReady,
  } = useRouter();

  const getCompanyData = useCallback(async () => {
    loadingActions.activeLoading();
    if (isReady) {
      const companyData = await getCompanyByUrl(
        companyName ? companyName[0] : '',
      );
      globalActions.setCompany(
        Company(
          // @ts-ignore
          Object.entries(companyData as {}).map(([id, data]) =>
            Object.assign(data, { id }),
          )[0],
        ),
      );
    }
    loadingActions.deactiveLoading();
  }, [isReady]);

  useEffect(() => {
    getCompanyData();
  }, [isReady]);

  return {
    states: {},
    actions: { getCompanyData },
  };
};
