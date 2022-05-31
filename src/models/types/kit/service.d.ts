export interface KitService {
  id: string;
  name: string;

  customPrice: number;
  customRuntime: number;
  customCommission: number;

  defaultPrice: number;
  defaultRuntime: number;
  defaultCommission: number;
}
