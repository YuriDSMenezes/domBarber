export interface ProfessionalService {
  kitId?: string;
  serviceId?: string;

  name: string;
  customPrice: number;
  customRuntime: number;
  customCommission: number;

  defaultPrice: number;
  defaultRuntime: number;
  defaultCommission: number;
}
