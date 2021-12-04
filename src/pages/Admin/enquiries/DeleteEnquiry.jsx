import React, { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { TrashCan } from "../../../styles/Button";

const DeleteEnquiry = ({ id, updateList }) => {
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const http = useAxios();
  const url = `enquiries/${id}`;

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete this enquiry?");
    if (confirmDelete) {
      setDeleting(true);
      try {
        const res = await http.delete(url);
        console.log(res);
      } catch (error) {
        setError(error);
      } finally {
        setDeleting(false);
      }
      try {
        const newData = await http.get("enquiries");
        console.log(newData);
        updateList(newData.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  if (deleting) {
    return <div>Deleting enquiry...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return <TrashCan size={30} onClick={handleDelete}></TrashCan>;
};

export default DeleteEnquiry;
