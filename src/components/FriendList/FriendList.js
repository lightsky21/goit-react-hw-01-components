import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem';
// import s from './FriendList.module.css'

function FriendList(friends) {
  // console.log(friends)
  return (
    <ul className="friend-list">
      {friends.friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item">
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
