import { useState } from "react";
import UserContex from './contexts/userContext.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import SignIn from "./pages/SignInPage.js";
import SignUp from "./pages/SignUpPage.js";
import GlobalStyle from "./styles/GlobalStyle.js";
import PointsContext from "./contexts/pointsContext.js";
import CadastroPoint from "./pages/CadastroPoint.js";

function App() {
  const [userInfos, setUserInfos] = useState({
    id: "",
    name: ""
  });
  const [showList, setShowList] = useState(0);

  return (
    <>
      <GlobalStyle />
      <UserContex.Provider value={{ userInfos, setUserInfos }}>
        <PointsContext.Provider value={{ showList, setShowList }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/cadastroPoint" element={<CadastroPoint />} />
            </Routes>
          </BrowserRouter>
        </PointsContext.Provider>
      </UserContex.Provider>
    </>
  );
}

export default App;
