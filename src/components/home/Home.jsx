import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

export const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <Link to="/listUsers">List Of Users</Link>
      <br />
    </section>
  );
};
