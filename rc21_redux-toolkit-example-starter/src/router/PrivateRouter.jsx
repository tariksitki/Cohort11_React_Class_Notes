

import { Navigate, Outlet } from "react-router-dom";
 

const PrivateRouter = () => {
  const user = true;

  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
};

/// Önemli: Burada useNavigate hook unu kullanamayiz. Cünkü, burasi bir func ici degil. Burasi bir component ici bu nedenle navigate component ini kullandik. 

export default PrivateRouter;
