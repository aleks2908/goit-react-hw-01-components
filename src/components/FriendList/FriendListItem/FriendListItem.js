import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  // console.log(id);
  return (
    <li className={css.item}>
      <span
        className={isOnline ? `${css.status} ${css.isOnline}` : css.status}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="120" />
      <p className={css.name}>{name}</p>
    </li>
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
