import React, { Fragment } from "react";
import { useAPI } from "./api/API";
import "./index.css";
import Register from "./components/register/Register";
import Login from "./components/Login";
import RequireAuth from "./components/RequiredAuth";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/home/Home";
import { Missing } from "./components/Missing";
import { UsersList } from "./components/user-lists/UsersList";
import { MainContainer } from "./styles/GlobalStyles";

const App = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Unauthenticated routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Authenticated routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/listUsers" element={<UsersList />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </MainContainer>
  );
};

export default App;
