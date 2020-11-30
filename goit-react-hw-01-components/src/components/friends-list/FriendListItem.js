import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            <span className={isOnline ? 'online' : 'offline'}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="60" />
            <p className={styles.name}>{name}</p>
        </>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};