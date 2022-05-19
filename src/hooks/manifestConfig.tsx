import { environment } from 'environments/environment.prod';
import { Company } from 'models/types/company';

export const ManifestConfig = (company: Company) => {
  const companyId = company.id;
  const manifestUrl = `${environment.hostApi}/company/${companyId}/manifest?projectId=${environment.projectId}`;

  const manifest = document.createElement('link') as HTMLLinkElement;
  manifest.rel = 'manifest';
  manifest.href = manifestUrl;
  document.head.appendChild(manifest);
};
