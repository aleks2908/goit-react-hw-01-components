import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      {isOnline ? (
        <span className={`${css.status} ${css.isOnline}`}></span>
      ) : (
        <span className={css.status}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="120" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.prototype = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
