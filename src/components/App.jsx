import Profile from "./Profile";
import Statistics from "./Statistics";
import data from "./data.json";

import user from "./user.json";
console.log(user);

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
    </div>
  );
};
