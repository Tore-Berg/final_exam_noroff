import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import AdminMenu from "./AdminMenu";
import { Helmet } from "react-helmet";

const Admin = () => {
  const history = useHistory();
  const [auth] = useContext(AuthContext);

  if (!auth) {
    history.push("/login");
  }
  return (
    <>
      <Helmet>
        <title>Holidaze | Admin</title>
      </Helmet>
      <AdminMenu />
    </>
  );
};

export default Admin;
