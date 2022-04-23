export interface CompanyPlanHistory {
  date: Date;
  ip?: string;
  navigator?: string;
  plan: CompanyPlanHistoryPlan;
}

interface CompanyPlanHistoryPlan {
  id: string;
  name: string;
  price: number;
  billing?: number;
}
