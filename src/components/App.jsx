import { Profile } from './Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Profile user={user} />
      </div>
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FriendList friends={friends} />
      </div>
    </>
  );
};
