export interface iCurrencyFormat {
  value: number;
  currencyPrefix?: string;
}

export const currencyFormat = ({
  value,
  currencyPrefix = '$',
}: iCurrencyFormat) => {
  return `${currencyPrefix} ${value
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
};
