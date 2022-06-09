import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import data from "./data.json";
import user from "./user.json";
import friends from "./friends.json"


export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics
        title='Upload stats'
        stats = {data}
      />
      <FriendList
        friends={friends} />

    </div>
  );
};
