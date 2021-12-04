import React, { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { TrashCan } from "../../../styles/Button";

const DeleteMessage = ({ id, updateList }) => {
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const http = useAxios();
  const url = `messages/${id}`;

  const handleDelete = async () => {
    setDeleting(true);
    const confirmDelete = window.confirm("Delete this message?");
    if (confirmDelete) {
      try {
        await http.delete(url);
      } catch (error) {
        setError(error);
      }
      try {
        const newData = await http.get("messages");
        console.log(newData);
        updateList(newData.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  if (deleting) {
    return <div>Deleting message...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div>
        <TrashCan size={30} onClick={handleDelete}></TrashCan>
      </div>
    </>
  );
};

export default DeleteMessage;
