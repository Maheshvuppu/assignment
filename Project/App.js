import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import LikeButton from './components/LikeButton';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <div>
      <EventList />
      <UserRegistration />
      <UserLogin />
    </div>
  );
}

export default App;
