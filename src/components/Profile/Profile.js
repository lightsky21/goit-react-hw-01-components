import PropTypes from 'prop-types';
import s from './Profile.module.css'

function Profile({ username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats }) {
    return (
        <div className={s.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
                <p className="name">{ username}</p>
                <p className="tag">@{tag }</p>
                <p className="location">{location }</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
                    <span className="quantity">{ stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
                    <span className="quantity">{ stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
                    <span className="quantity">{ stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile;

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
}