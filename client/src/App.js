import Home from './pages/home/Home';
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
          {user ? <Home /> : <Navigate to="/register" />}>
        </Route>
        <Route path="/register" element=
          {!user ? <Register /> : <Navigate to="/" />}>
        </Route>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}></Route>
        <Route path={"/profile/:username"} element=
          {user ? <Profile /> : <Navigate to="/register" />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
