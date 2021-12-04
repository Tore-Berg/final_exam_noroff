import React from "react";
import { AdminNavigation, StyledLink } from "./AdminMenu.styles";
import {
  FaLaptopHouse,
  FaMailBulk,
  FaCommentDots,
  FaEdit,
} from "react-icons/fa";
import Heading from "../../components/layout/headings/Heading";

const AdminMenu = () => {
  return (
    <>
      <Heading title="Admin Menu" />
      <AdminNavigation>
        <StyledLink to="/admin/new">
          <FaLaptopHouse size={100} />
        </StyledLink>
        <StyledLink to="/admin/read-mail">
          <FaMailBulk size={100} />
        </StyledLink>
        <StyledLink to="/admin/read-enquiries">
          <FaCommentDots size={100} />
        </StyledLink>
        <StyledLink to="/admin/edit">
          <FaEdit size={100} />
        </StyledLink>
      </AdminNavigation>
    </>
  );
};

export default AdminMenu;
