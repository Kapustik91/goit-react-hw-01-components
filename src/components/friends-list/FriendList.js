import PropTypes from 'prop-types';
import FriendListItems from './FriendListItem';
import styles from './FriendList.module.css';


export default function FriendList({ friends }) {
    return (
<ul className="friend-list">
    {friends.map(friend => (
    <li className={styles.item} key={friend.id}>
    <FriendListItems
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
    </li>
    ))}
</ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};
