/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useGlobal } from 'hooks/Global';
import { Company } from 'models/company';
import { getCompanyByUrl } from '../../cases/company/getCompanyByUrl';

// type ObjEntriesCompanyData = [id: string, data: CompanyType][];

export const useHomeController = () => {
  const { actions } = useGlobal();

  const {
    query: { companyName },
    isReady,
  } = useRouter();

  const getCompanyData = useCallback(async () => {
    if (isReady) {
      const companyData = await getCompanyByUrl(
        companyName ? companyName[0] : '',
      );
      actions.setCompany(
        Company(
          // @ts-ignore
          Object.entries(companyData as {}).map(([id, data]) =>
            Object.assign(data, { id }),
          )[0],
        ),
      );
    }
  }, [isReady]);

  useEffect(() => {
    getCompanyData();
  }, [isReady]);

  return {
    states: {},
    actions: { getCompanyData },
  };
};
