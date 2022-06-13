import { BaseTypes } from '../base';

export interface CommandItem extends BaseTypes {
  orderId?: string;
  clientId: string;
  commandId: string;
  checkoutId?: string;

  kitId?: string;
  serviceId?: string;
  productId?: string;
  scheduleIds: string[];
  professionalIds: string[];

  date: Date;
  name: string;
  price: number;
  quantity: number;
  pointUsed: boolean;
  type: CommandItemType;

  discount?: number;
  pointsToTrade?: number;
  pointsGenerated?: number;

  status: CommandItemStatus;

  order?: CashOrder;
  professionals?: Professional[];
}
