import React from "react";
import { Link } from "react-router-dom";
import { StyledLink, Ul } from "./Menu.styled";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useHistory } from "react-router";
import { Button, DangerButton } from "../../../styles/Button";
import { useState } from "react";

const Menu = ({ open }) => {
  const [scrolledlink, setScrolledLink] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 20) {
      setScrolledLink(true);
    } else {
      setScrolledLink(false);
    }
  };
  window.addEventListener("scroll", handleChange);
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setAuth(null);
      history.push("/login");
    }
  };

  return (
    <Ul open={open}>
      <li>
        <StyledLink
          className={scrolledlink ? "scrolledlink" : "navlink"}
          exact
          to="/"
          activeStyle={{ borderBottom: "2px solid gold" }}
        >
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink
          className={scrolledlink ? "scrolledlink" : "navlink"}
          exact
          to="/results"
          activeStyle={{ borderBottom: "2px solid gold" }}
        >
          View all
        </StyledLink>
      </li>
      <li>
        <StyledLink
          className={scrolledlink ? "scrolledlink" : "navlink"}
          exact
          to="/contact"
          activeStyle={{ borderBottom: "2px solid gold" }}
        >
          Contact
        </StyledLink>
      </li>
      <li>
        {auth ? (
          <>
            <StyledLink
              className={scrolledlink ? "scrolledlink" : "navlink"}
              exact
              to="/admin"
              activeStyle={{ borderBottom: "2px solid gold" }}
            >
              Admin
            </StyledLink>
            <DangerButton onClick={logout}>Logout</DangerButton>
          </>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </li>
    </Ul>
  );
};

export default Menu;
