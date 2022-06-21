import { BaseTypes } from './types/base';
import { CommandItem } from './types/command/commandItem';

export interface Command extends BaseTypes {
  clientId: string;

  code: number;
  start: Date;
  end: Date;

  paid?: boolean;
  discount?: number;
  paidTotal?: number;
  toPayTotal?: number;
  grossTotal?: number;
  items?: CommandItem[];
}
