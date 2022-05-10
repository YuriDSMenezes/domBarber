export interface iCurrencyFormat {
  value: number;
  currencyPrefix?: string;
}

export const currencyFormat = ({
  value,
  currencyPrefix = '$',
}: iCurrencyFormat) => {
  if (value !== undefined) {
    return `${currencyPrefix} ${value
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }
  return `R$ 0,00`;
};
