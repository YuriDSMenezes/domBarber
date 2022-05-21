import { colorShade, convertHexToRGB } from 'helpers';
import { CompanyTheme } from 'models/types/company/theme';

export const setTheme = (theme: CompanyTheme) => {
  const bgColorRGB = convertHexToRGB(theme?.bgColor);
  const textColorRGB = convertHexToRGB(theme?.textColor);
  const primaryColorRGB = convertHexToRGB(theme?.primaryColor);
  const primaryColorShade = colorShade(theme?.primaryColor, 30);
  const secondaryColorRGB = convertHexToRGB(theme?.secondaryColor);

  // updateTag({ name: 'theme-color', content: theme?.primaryColor });

  // PRIMARY
  document.body.style.setProperty('--color-primary', theme?.primaryColor);
  document.body.style.setProperty('--color-primary-rgb', primaryColorRGB);
  document.body.style.setProperty('--color-primary-tint', primaryColorShade);
  document.body.style.setProperty('--color-primary-shade', primaryColorShade);
  document.body.style.setProperty(
    '--color-primary-contrast',
    theme?.primaryTextColor,
  );
  // SECONDARY
  document.body.style.setProperty('--color-secondary', theme?.secondaryColor);
  document.body.style.setProperty('--color-secondary-rgb', secondaryColorRGB);
  document.body.style.setProperty(
    '--color-secondary-contrast',
    theme?.secondaryTextColor,
  );
  // BACKGROUND
  document.body.style.setProperty('--background-color', theme?.bgColor);
  document.body.style.setProperty('--background-color-rgb', bgColorRGB);
  // TEXT
  document.body.style.setProperty('--text-color', theme?.textColor);
  document.body.style.setProperty('--text-color-rgb', textColorRGB);
};
