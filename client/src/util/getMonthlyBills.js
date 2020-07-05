const getMonthlyBills = (bills) => {
  const month = new Date().getMonth() + 1;
  const userBills = bills
    .filter((bill) => bill.billing_month === month)
    .map(({ type_id: id, type: { name }, amount }) => ({ id, name, amount }))
    .sort((a, b) => a.id - b.id);
  return userBills;
};

export default getMonthlyBills;
