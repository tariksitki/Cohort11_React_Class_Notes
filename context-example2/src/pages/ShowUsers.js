import User from '../components/User';
import { useUserContext } from '../context/UserContextProvider';

  // users context den gelecegi icin artik props olarak almiyoruz.
// const ShowUsers = ({ users }) => {
const ShowUsers = () => {
    // provider ile values gönderirken object formatinda oldugu icin burada {} ile cekilir.
  const {users} = useUserContext();
  console.log(users);

  return (
    <div>
      <h2>User List</h2>
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ShowUsers;
