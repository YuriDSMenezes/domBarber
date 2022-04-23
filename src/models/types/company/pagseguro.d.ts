export interface CompanyPagSeguro {
  id?: string;
  email: string;
  oldToken?: string;
  publicKey?: string;
  token?: CompanyPagSeguroToken;

  maxInstallment: number;
  maxInstallmentNoInterest: number;
}

interface CompanyPagSeguroToken {
  type: string;
  token: string;
  expiresIn: string;
  refresh: string;
  scope: string;
}
