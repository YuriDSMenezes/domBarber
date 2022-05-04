import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useLoading } from 'hooks/Loading';

const CompanyName: NextPage = () => {
  const { actions: loadingActions } = useLoading();
  const {
    push,
    query: { companyName },
    isReady,
  } = useRouter();
  useEffect(() => {
    if (!isReady) loadingActions.activeLoading();
    if (isReady) {
      let localCompany = null;
      if (typeof window !== 'undefined') {
        localCompany = localStorage.getItem('@domBarber:company');
      }
      if (localCompany) {
        push(`${JSON.parse(localCompany).app.url}/home`);
        loadingActions.deactiveLoading();
        return;
      }
      loadingActions.deactiveLoading();
      push({
        pathname: `/[companyName]/home`,
        query: { companyName },
      });
    }
  }, [isReady]);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        background: '#1c1c1c',
        height: '100vh',
        width: '100vw',
      }}
    />
  );
};

export default CompanyName;
