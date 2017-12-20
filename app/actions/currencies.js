const SWAP_CURRENCY = 'SWAP_CURRENCY';
const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';
const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION';
const CONVERSION_ERROR = 'CONVERSION_RESULT';
const CONVERSION_RESULT = 'CONVERSION_RESULT';

const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});

// to return an object with fat arrow function shorthand wrapping the object in parenthesis
const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

const changeBaseCurrency = currency => ({
  type: CHANGE_BASE_CURRENCY,
  currency,
});

const changeQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency,
});

const getInitialConversion = () => ({
  type: GET_INITIAL_CONVERSION,
});

export {
  SWAP_CURRENCY,
  CHANGE_CURRENCY_AMOUNT,
  CHANGE_QUOTE_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
  changeBaseCurrency,
  changeQuoteCurrency,
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversion,
};
