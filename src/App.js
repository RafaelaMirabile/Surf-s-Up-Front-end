import { useState } from "react";
import UserContex from './contexts/userContext.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignIn from "./pages/SignInPage.js";
import SignUp from "./pages/SignUpPage.js";
import FavPage from "./pages/FavPage.js";
import GlobalStyle from "./styles/GlobalStyle.js";

function App() {
  const [userInfos, setUserInfos] = useState({
    id: "",
    name: ""
  });

  return (
    <>
      <GlobalStyle/>
        <UserContex.Provider value={{ userInfos, setUserInfos }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/fav" element={<FavPage />} />
            </Routes>
          </BrowserRouter>
        </UserContex.Provider>
    </>
  );
}

export default App;
