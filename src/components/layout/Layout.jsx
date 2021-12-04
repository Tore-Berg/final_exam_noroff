import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.main`
  min-height: 90vh;
  margin: 80px auto;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};
export default Layout;
