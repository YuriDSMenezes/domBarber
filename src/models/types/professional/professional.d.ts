import { BaseTypes } from '../base/index.d';
import { WorkDay } from '../company';
import { ProfessionalService } from './professional-service';

export interface Professional extends BaseTypes {
  userId?: string;
  serviceIds: string[];
  collaboratorId: string;

  name: string;
  nick?: string;
  image?: string;
  days: WorkDay[];
  services: ProfessionalService[];
}
