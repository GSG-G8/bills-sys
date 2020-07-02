const getMonthlyBills = (bills) => {
  const allBills = [];
  const month = new Date().getMonth() + 1;
  const dd = bills.filter((bill) => bill.billing_month === month);
  dd.forEach(({ type: { name }, amount }) => {
    allBills.push({ name, amount });
  });
  return allBills;
};

export default getMonthlyBills;
