import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import { DomBarberLogo } from '../../public/assets';

interface LoadingContextProps {
  states: {
    isLoading: boolean;
  };
  actions: {
    activeLoading: () => void;
    deactiveLoading: () => void;
  };
}

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1c1c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  img {
    @keyframes bounceIn {
      0% {
        transform: scale(0.9);
      }

      50% {
        transform: scale(1);
      }

      100% {
        transform: scale(0.9);
      }
    }
    animation: bounceIn 1.5s infinite;
  }
`;

const Loader = styled.div`
  position: absolute;
  border: 6px solid #ffffff;
  border-top-color: #f0972f;
  height: 230px;
  width: 230px;
  border-radius: 50%;

  animation: is-rotating 2s infinite;
  @keyframes is-rotating {
    0% {
      transform: rotate(-360deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingContext = createContext<LoadingContextProps>(
  {} as LoadingContextProps,
);

const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const activeLoading = () => setIsLoading(true);
  const deactiveLoading = () => {
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <LoadingContext.Provider
      value={{
        states: { isLoading },
        actions: { activeLoading, deactiveLoading },
      }}
    >
      {isLoading && (
        <LoadingContainer>
          <Loader />
          <img src={DomBarberLogo.src} alt="Dombarber Logo" />
        </LoadingContainer>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within an LoadingProvider');
  }

  return context;
};

export { LoadingProvider, useLoading };
