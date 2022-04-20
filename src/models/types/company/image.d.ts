export interface CompanyImage {
  logo?: string;
  about?: string;
  icon?: CompanyImageIcon;
  cover?: CompanyImageCover;
}

interface CompanyImageCover {
  app?: string;
  desktop?: string;
}

interface CompanyImageIcon {
  default: string;
  '72x72': string;
  '96x96': string;
  '128x128': string;
  '144x144': string;
  '152x152': string;
  '192x192': string;
  '384x384': string;
  '512x512': string;
}
