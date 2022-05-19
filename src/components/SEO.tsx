import { environment } from 'environments/environment.prod';
import { Company } from 'models/types/company';
import Head from 'next/head';

interface SEOProps {
  company: Company;
}

export default function SEO({ company }: SEOProps) {
  if (company && company.app) {
    const pageTitle = `${company.app.name} | DomBarber'}`;

    const defaultLogo = `https://firebasestorage.googleapis.com/v0/b/doms-base-firestore.appspot.com/o/${environment.projectId}%2Fdefault%2Flogo-white.png?alt=media`;

    const favicon = company.image.icon?.['72x72'];
    const image = company.image.icon?.['512x512'];

    return (
      <Head>
        <title>{company.app.name} | DomBarber</title>
        <meta name="description" content={company.app.description} />

        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

        <link rel="icon" href={favicon || defaultLogo} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={company.app.description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:image" content={image || defaultLogo} />
        <meta property="og:image:secure_url" content={defaultLogo} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image || defaultLogo} />
        <meta name="twitter:image:src" content={image || defaultLogo} />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="620" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" // ,user-scalable=no
        />
      </Head>
    );
  }
}
