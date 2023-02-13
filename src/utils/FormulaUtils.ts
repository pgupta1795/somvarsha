export const roundOff = (number: number) =>
  Math.round((number + Number.EPSILON) * 100) / 100;

export const currencyConvert = (number: number) =>
  Number(parseFloat(number.toString()).toFixed(1)).toLocaleString('en', {
    minimumFractionDigits: 1,
  });

/**
 * Lumsump Amount = P(1+r)^n
 * P = Prinipal Amount
 * r = Rate of interest
 * n = Number of years
 * @param amount Invested Amount
 * @param interest Expected Interest Rate
 * @param years Investment time of years
 * @param months extra months
 */
export const calculateLumpsum = (
  amount: number,
  interest: number,
  years: number,
  months: number
) => {
  const timeInMonths = years * 12 + months;
  const total = amount * (1 + interest / 100) ** (timeInMonths / 12);
  const profit = total - amount;
  return currencyConvert(profit);
};

/**
 * SIP Amount = P * [ (1+i)^n-1 ] * (1+i)/i
 * P = Amount you invest through SIP
 * i = Compounded rate of return
 * n = Investment duration in months
 * r = Expected rate of return
 *
 * ex: You have i = r/100/12 or 0.01.
 * SIP Amount = 2000 * [(1+0.01) ^24 - 1] * (1+0.01)/0.01
 * @param amount
 * @param interest
 * @param years
 * @param months
 */
export const calculateSIP = (
  amount: number,
  interest: number,
  years: number,
  months: number
) => {
  const timeInMonths = years * 12 + months;
  const i = interest / 100 / 12; // compoundedReturn
  const total = amount * ((1 + i) ** timeInMonths - 1) * ((1 + i) / i);
  const profit = total - amount * timeInMonths;
  return currencyConvert(profit);
};
