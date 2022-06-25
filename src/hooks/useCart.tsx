import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Service } from 'models/types/service';
import { Professional } from 'models/types/professional';
import { Product } from 'models/types/product';
import { setToStorage } from 'helpers';

interface CartProviderProps {
  children: ReactNode;
}

export interface CartProps {
  service?: Service;
  serviceId?: string;
  professional?: Professional;
  professionalId?: string;
  start?: Date;
}

interface CartContextData {
  cart: CartProps[];
  addService: (service: Service) => Promise<void>;
  addServiceNoCheckProfessional: (service: Service) => Promise<void>;
  addProfessional: (professional: Professional) => Promise<void>;
  addProfessionalWithService: (
    professional: Professional,
    service: Service,
  ) => Promise<void>;
  addSchedule: (date: Date) => Promise<void>;
  addProduct: (product: Product) => Promise<void>;
  addScheduleKit: (data: Date, indexService: string) => Promise<void>;
  addProfessionalKit: (
    professional: Professional,
    indexService: string,
  ) => Promise<void>;
  hasProfessional?: boolean;
  getLastItemCart?: CartProps;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  useEffect(() => {
    const cart = localStorage.getItem('@domBarber:cart');
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  const [cart, setCart] = useState<CartProps[]>([]);

  const [hasProfessional, setHasProfessional] = useState<boolean>();

  const getLastItemCart = cart[cart.length - 1];

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
        const newCart = [...cart, newItemCart];
        cart.pop();
        setCart(newCart);
        localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
      } else {
        const newService = {
          service,
          serviceId: service.id,
        };
        const newCart = [...cart, newService];
        setCart(newCart);
        localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
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
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    } catch (error) {
      console.log(error);
    }
  };

  const addProfessional = async (professional: Professional) => {
    try {
      const lastItem = cart[cart.length - 1];
      const newProfessional = {
        ...lastItem,
        professional,
        professionalId: professional.id,
      };
      cart.pop();
      const newCart = [...cart, newProfessional];
      setCart(newCart);
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    } catch (error) {
      console.log(error);
    }
  };

  const addProfessionalWithService = async (
    professional: Professional,
    service: Service,
  ) => {
    const newProfessional = {
      professional,
      professionalId: professional?.id,
      service,
      serviceId: service?.id,
    };
    const newCart = [...cart, newProfessional];
    setCart(newCart);
    setToStorage('@domBarber:cart', JSON.stringify(newCart));
  };

  const addProduct = async (product: Product) => {
    try {
      const newService = {
        product,
        serviceId: product.id,
      };
      const newCart = [...cart, newService];
      setCart(newCart);
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    } catch (error) {
      console.log(error);
    }
  };

  const addSchedule = async (date: Date) => {
    try {
      const lastItem = cart.pop();
      const newItem = { ...lastItem, start: date };
      const newCart = [...cart, newItem];
      setCart(newCart);
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    } catch (error) {
      console.log(error);
    }
  };

  const addScheduleKit = async (date: Date, indexService: string) => {
    try {
      // @ts-ignore
      const serviceIndex = getLastItemCart?.service?.services.findIndex(
        (service: any) => service.id === indexService && !service.start,
      );
      // @ts-ignore
      getLastItemCart.service.services[serviceIndex] = {
        // @ts-ignore
        ...getLastItemCart?.service.services[serviceIndex],
        start: date,
      };
      cart.pop();
      const newCart = [...cart, getLastItemCart];
      setCart(newCart);
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    } catch (error) {
      console.log(error);
    }
  };

  const addProfessionalKit = async (
    professional: Professional,
    indexService: string,
  ) => {
    try {
      // @ts-ignore
      const serviceIndex = getLastItemCart?.service?.services.findIndex(
        (service: any) => service.id === indexService && !service.start,
      );
      // @ts-ignore
      getLastItemCart.service.services[serviceIndex] = {
        // @ts-ignore
        ...getLastItemCart?.service.services[serviceIndex],
        professional,
        professionalId: professional.id,
      };
      cart.pop();
      const newCart = [...cart, getLastItemCart];
      setCart(newCart);
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
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
        addSchedule,
        getLastItemCart,
        addProduct,
        addScheduleKit,
        addProfessionalKit,
        addProfessionalWithService,
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
