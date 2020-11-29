import user from './components/SocialMediaProfile/user.json';
import Profile from './components/SocialMediaProfile/Profile';

import statisticalData from './components/statistics/statistical-data.json';
import Statistics from './components/statistics/Statistics';

import friends from './components/friends-list/friends.json';
import FriendList from './components/friends-list/FriendList';

import transactions from './components/transaction/transactions.json';
import TransactionHistory from './components/transaction/TransactionHistory';

export default function App() {
  return (
    <div> 
    {}
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    {}
    <Statistics title="Upload stats" stats={statisticalData}/>
      <Statistics stats={statisticalData} />
      {}
      <FriendList friends={friends} />
      {}
      <TransactionHistory items={transactions} />

    </div>
  
  );
}