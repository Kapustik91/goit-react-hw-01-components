import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr className={s.headLine}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            
            <tbody>
                {items.map(item => (
                    <tr className={s.item} key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }),
    ),
}