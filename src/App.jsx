import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { MasterList } from "./pages/MasterList/MasterList";
import { Registration } from "./pages/Registration/Registration";
import { UserRegis } from "./pages/Registration/UserRegis";
import { MasterRegis } from "./pages/Registration/MasterRegis";
import { Login } from "./pages/Login/Login";
import { Map } from "./pages/Map/Map";
import { MasterCard } from "./pages/MasterCard/MasterCard";
import { UserProfile } from "./pages/Profile/UserProfile";

export const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mastersList" element={<MasterList />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/userRegis" element={<UserRegis />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/masterRegis" element={<MasterRegis />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/master/:id" element={<MasterCard />} />
      </Routes>
    </BrowserRouter>
  );
};
