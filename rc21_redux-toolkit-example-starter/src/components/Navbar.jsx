import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
    // birinci kullanim klasik yöntem
  // const user = useSelector((state) => state.auth.user);

  const {user} = useSelector(state => state.auth);
  console.log(user);
  // state lerimize bakmanin daha güzel bir yöntemi redux dev tool kullanmaktir.

  const dispatch = useDispatch();

  const handleLogout = () => {
   if ( window.confirm("Are You Sure to Logout")) {
    navigate("/login");
    dispatch(clearUser());  /// clear da herhangi bir payload yok.
   }
  };

  const handleLogin = () => {
    user ? alert("You are already Logged in") : navigate("/login")
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor : "pointer" }}
            onClick={() => navigate("/")}
          >
            Clarusway News
          </Typography>
          {user ? (
            <Button color="inherit" onClick={handleLogout} >Logout</Button>
          ) : (
            <Button color="inherit" onClick={handleLogin} >Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
