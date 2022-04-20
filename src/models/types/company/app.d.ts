import { CompanyTheme } from './theme';

interface CompanyApp {
  url?: string;
  name?: string;
  branch?: string;
  domain?: string;
  theme: CompanyTheme;
  description?: string;
  scheduleInterval?: number;
}
