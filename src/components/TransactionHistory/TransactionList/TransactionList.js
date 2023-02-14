import PropTypes from 'prop-types';
import { Transaction } from '../Transaction/Transaction';
import css from '../TransactionList/TransactionList.module.css';

export const TransactionList = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Transaction item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};


TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};