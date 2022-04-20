import { CompanyPlanHistory } from './plan-history';

export interface CompanyPlan {
  id: string;
  name: string;
  price: number;
  billing?: number;
  dueDate?: Date;
  history: CompanyPlanHistory[];
}
