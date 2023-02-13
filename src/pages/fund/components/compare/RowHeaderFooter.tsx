const RowHeaderFooter = () => (
  <tr>
    <th aria-label="checkbox" />
    <th aria-label="Fund Name">Name</th>
    <th title="Return over last year">1Y</th>
    <th title="Annualized return over last 3 year">3Y</th>
    <th title="Annualized return over last 5 year">5Y</th>
    <th title="Annualized return since the launch of fund">All</th>
    <th title="Volatility or Standard Deviation is a measure of risk.Higher volatility means more risk">
      Volatility
    </th>
  </tr>
);

export default RowHeaderFooter;
