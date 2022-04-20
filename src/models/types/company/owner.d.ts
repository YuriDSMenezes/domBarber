import { CompanyAddress } from './address';
import { CompanyPhone } from './phone';

export interface CompanyOwner {
  userId: string;

  name: string;
  cpf?: string;
  dateBirth?: Date | '';
  motherName?: string;
  phones: CompanyPhone[];
  address: CompanyAddress;
}
