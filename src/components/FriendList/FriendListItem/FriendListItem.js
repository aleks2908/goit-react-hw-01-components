import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

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

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
