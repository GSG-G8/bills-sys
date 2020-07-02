import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Table = ({ bills }) => {
  const { t } = useTranslation();
  const schema = [
    {
      displayName: t('table.billing-period'),
      selector: (obj) => `${obj.billing_month}/${obj.billing_year}`,
    },
    { displayName: t('table.amount'), selector: (obj) => obj.amount },
    { displayName: t('table.type'), selector: (obj) => t(obj.type.name) },
    { displayName: t('table.details'), selector: () => `` },
  ];
  return (
    <div className="flex justify-center ">
      <table className="table-auto w-3/4">
        <thead>
          <tr>
            {schema.map(({ displayName }) => (
              <th
                key={displayName}
                className=" border-t-2 border-primary-dark px-4 py-2"
              >
                <div>{displayName}</div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id} className="">
              {schema.map(({ selector }) => (
                <td className="px-4 py-2 text-center border-t border-primary-dark">
                  {selector(bill)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const { number, shape, arrayOf } = PropTypes;
Table.propTypes = {
  bills: arrayOf(
    shape({
      amount: number.isRequired,
      billing_month: number.isRequired,
      billing_year: number.isRequired,
      id: number.isRequired,
    })
  ).isRequired,
};

export default Table;
