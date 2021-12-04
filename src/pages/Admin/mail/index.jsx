import React, { useState, useEffect, useContext } from "react";
import useAxios from "../../../hooks/useAxios";
import { useHistory } from "react-router";
import AuthContext from "../../../context/AuthContext";
import { MESSAGE_PATH } from "../../../constants/api";
import DeleteMessage from "./DeleteMessage";
import { ButtonWrapper, Button } from "../../../styles/Button";
import dateFormat from "dateformat";
import Heading from "../../../components/layout/headings/Heading";
import LoaderIndicator from "../../../components/common/LoaderIndicator";
import GoBack from "../../../components/common/GoBack";
import { StyledList, StyledListItem } from "../../../styles/MessageList";
import { Helmet } from "react-helmet";

const ReadMail = () => {
  const [loading, setLoading] = useState(null);
  const [auth] = useContext(AuthContext);
  const http = useAxios();
  const [error, setError] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);

  if (!auth) {
    history.push("/login");
  }

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await http.get(MESSAGE_PATH);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log("error", error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getMessages();
  }, []);
  if (loading) {
    return <LoaderIndicator />;
  }
  if (error) {
    return <div>There was an error</div>;
  }
  return (
    <>
      <Helmet>
        <title>Holidaze | Read Mail</title>
      </Helmet>
      {data && data.length < 1 ? (
        <Heading title="No Messages" />
      ) : (
        <Heading title={`${data.length} New Messages`} />
      )}
      <StyledList>
        {data.map((message) => {
          return (
            <StyledListItem key={message.id}>
              <h3>
                <strong>Message recieved from</strong> {message.name}
              </h3>
              <p>
                <strong>Message recieved:</strong>{" "}
                {dateFormat(message.published_at)}
              </p>
              <p>
                <strong>Email Address:</strong> {message.email}
              </p>
              <p>
                <strong>Message:</strong> {message.message}
              </p>
              <ButtonWrapper>
                <Button>
                  <a href={`mailto:${message.email}`}>Reply</a>
                </Button>
                <DeleteMessage id={message.id} updateList={setData} />
              </ButtonWrapper>
            </StyledListItem>
          );
        })}
      </StyledList>
      <div>
        <GoBack />
      </div>
    </>
  );
};

export default ReadMail;
