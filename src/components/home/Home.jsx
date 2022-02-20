import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import {
  UserBtn,
  UserListContainer,
  UserListsMainContainer,
} from "../user-lists/UsersListStyled";

export const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <>
      <UserListsMainContainer>
        <UserListContainer>
          <h2>Home</h2>
          <br />
          <h3>You are logged in!</h3>
          <br />
          <Link to="/listUsers">List Of Users</Link>
          <br />
          <br />
          <UserBtn onClick={logout}>Logout</UserBtn>
          <br />
        </UserListContainer>
      </UserListsMainContainer>
    </>
  );
};
