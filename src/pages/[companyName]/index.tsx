import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useLoading } from 'hooks/Loading';

const companyName: NextPage = () => {
  const { actions: loadingActions } = useLoading();
  const {
    push,
    query: { companyName },
    isReady,
  } = useRouter();
  useEffect(() => {
    if (!isReady) loadingActions.activeLoading();
    if (isReady) {
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

export default companyName;
