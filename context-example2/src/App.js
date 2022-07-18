
import UserContextProvider from './context/UserContextProvider';
import ShowUsers from './pages/ShowUsers';

function App() {
    // normalde verilerimizi burada cekiyor local state e atiyor ve props lar ile gönderme yapiyorduk. simdi bu islemlerin hepsini context dosyasinda yapacagiz.
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users')
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  return (
    <>
      {/* <ShowUsers users={users} /> */}
      <UserContextProvider>
        <ShowUsers />
      </UserContextProvider>
    </>
  );
}
export default App;
