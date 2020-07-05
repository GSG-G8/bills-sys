const getBillTypes = (bills) => {
  const allTypes = [];
  const tempTypes = {};

  bills.forEach(({ name, id }) => {
    if (!tempTypes[name]) allTypes.push({ name, id });
    tempTypes[name] = 'exists';
  }, {});
  return allTypes.sort((a, b) => a.id - b.id);
};

export default getBillTypes;
