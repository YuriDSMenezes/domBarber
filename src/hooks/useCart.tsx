import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { setCookie, parseCookies } from 'nookies';
import { Service } from 'models/types/service';
import { Professional } from 'models/types/professional';

interface CartProviderProps {
  children: ReactNode;
}

interface CartProps {
  service?: Service;
  serviceId?: string;
  professional?: Professional;
  professionalId?: string;
  start?: string;
}

interface CartContextData {
  cart: CartProps[];
  addService: (service: Service) => Promise<void>;
  addServiceNoCheckProfessional: (service: Service) => Promise<void>;
  addProfessional: (professional: Professional) => Promise<void>;
  hasProfessional?: boolean;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  useEffect(() => {
    const cookies = parseCookies();
    const cart = cookies['@domBarber:cart'];
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  const [cart, setCart] = useState<CartProps[]>([]);

  const [hasProfessional, setHasProfessional] = useState<boolean>();

  const addService = async (service: Service) => {
    try {
      const lastItemCart = cart[cart.length - 1];

      const hasProfessional = !!(
        lastItemCart?.professional && lastItemCart?.professionalId
      );
      setHasProfessional(hasProfessional);
      if (hasProfessional) {
        const newItemCart = {
          ...lastItemCart,
          service,
          serviceId: service.id,
        };
        cart.pop();
        const newCart = [...cart, newItemCart];
        setCart(newCart);
        setCookie(null, '@domBarber:cart', JSON.stringify(newCart), {
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
        });
      } else {
        const newService = {
          service,
          serviceId: service.id,
        };
        const newCart = [...cart, newService];
        setCart(newCart);
        setCookie(null, '@domBarber:cart', JSON.stringify(newCart), {
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addServiceNoCheckProfessional = async (service: Service) => {
    try {
      const newService = {
        service,
        serviceId: service.id,
      };
      const newCart = [...cart, newService];
      setCart(newCart);
      setCookie(null, '@domBarber:cart', JSON.stringify(newCart), {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addProfessional = async (professional: Professional) => {
    try {
      const lastItem = cart.pop();
      const newProfessional = {
        ...lastItem,
        professional,
        professionalId: professional.id,
      };
      const newCart = [...cart, newProfessional];
      setCart(newCart);
      setCookie(null, '@domBarber:cart', JSON.stringify(newCart), {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addService,
        addServiceNoCheckProfessional,
        hasProfessional,
        addProfessional,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}
