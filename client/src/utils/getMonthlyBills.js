const getMonthlyBills = (bills) => {
  const allBills = [];
  const month = new Date().getMonth() + 1;
  const userBills = bills.filter((bill) => bill.billing_month === month);
  userBills.forEach(({ type_id: id, type: { name }, amount }) => {
    allBills.push({ id, name, amount });
  });
  return allBills.sort((a, b) => a.id - b.id);
};

export default getMonthlyBills;
