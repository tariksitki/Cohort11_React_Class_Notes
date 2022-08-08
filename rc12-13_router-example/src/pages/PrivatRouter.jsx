import { Outlet, useNavigate, Navigate } from "react-router-dom";

const PrivatRouter = () => {
    // normalde bu bilgi global state den gelecek ama biz simule ediyoruz.
  const isAuthenticated = false;
  const navigate = useNavigate();

    /////////  Önemli:  navigate bir func dir bu nedenle return icinde kullanilmaz. eger ilk render icinde kullanmak istiyorsak bunu useEffect icinde kullanamk zorundayiz. alternatif olarak Navigate component kullanilir. 
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivatRouter;