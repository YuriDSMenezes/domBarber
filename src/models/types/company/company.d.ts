import { BaseTypes } from '../base/index.d';
import { CompanyAddress } from './address';
import { CompanyApp } from './app';
import { Wizard } from './enums';
import { CompanyImage } from './image';
import { CompanyOwner } from './owner';
import { CompanyPagSeguro } from './pagseguro';
import { CompanyPhone } from './phone';
import { CompanyPlan } from './plan';
import { CompanyTerm } from './term';
import { CompanyTimezone } from './timezone';
import { WorkDay } from './work-day';

export interface Company extends BaseTypes {
  app: CompanyApp;
  plan: CompanyPlan;
  image: CompanyImage;
  owner: CompanyOwner;
  address: CompanyAddress;
  timezone: CompanyTimezone;
  pagseguro: CompanyPagSeguro;

  name: string;
  email?: string;
  wizard: Wizard;
  cpfCnpj?: string;
  branchIds: string[];
  terms: CompanyTerm[];
  socialReason?: string;
  phones: CompanyPhone[];
  openingHours: WorkDay[];
}
