import React, { useState, useEffect, useContext } from "react";
import useAxios from "../../../hooks/useAxios";
import { useHistory } from "react-router";
import AuthContext from "../../../context/AuthContext";
import { ENQUIRY_PATH } from "../../../constants/api";
import DeleteEnquiry from "./DeleteEnquiry";
import dateFormat from "dateformat";
import Heading from "../../../components/layout/headings/Heading";
import { Button, ButtonWrapper } from "../../../styles/Button";
import LoaderIndicator from "../../../components/common/LoaderIndicator";
import { StyledList, StyledListItem } from "../../../styles/MessageList";
import GoBack from "../../../components/common/GoBack";
import { Helmet } from "react-helmet";

const ReadEnquiries = () => {
  const [loading, setLoading] = useState(null);
  const [auth] = useContext(AuthContext);
  const http = useAxios();
  const [error, setError] = useState(null);
  const history = useHistory();
  const [data, setData] = useState([]);
  const randomKey = Math.random();
  console.log(randomKey);

  if (!auth) {
    history.push("/login");
  }

  useEffect(() => {
    async function getEnquiries() {
      try {
        const response = await http.get(ENQUIRY_PATH);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log("error", error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getEnquiries();
  }, []);

  if (loading) {
    return <LoaderIndicator />;
  }
  if (error) {
    return <div>Something went wrong.</div>;
  }

  return (
    <>
      <Helmet>
        <title>Holidaze | Read Enquiries</title>
      </Helmet>
      {data && data.length < 1 ? (
        <Heading title="No Enquiries" />
      ) : (
        <Heading title={`${data.length} New Enquiries`} />
      )}
      <StyledList>
        {data.map((reservation) => {
          const {
            id,
            name,
            published_at,
            enquiry,
            arrival_date,
            departure_date,
            persons,
            email,
            title,
          } = reservation;

          return (
            <StyledListItem key={id}>
              <h3>
                {name} has made an enquiry for {title}
              </h3>
              <p>Persons: {persons}</p>
              <p>Arrival date: {arrival_date}</p>
              <p>Departure date: {departure_date}</p>
              <p>Enquiry recieved: {dateFormat(published_at)}</p>
              <p>Comments: {enquiry}</p>
              <ButtonWrapper>
                <Button>
                  <a href={`mailto:${email}`}>Reply</a>
                </Button>
                <DeleteEnquiry id={id} updateList={setData} />
              </ButtonWrapper>
            </StyledListItem>
          );
        })}
      </StyledList>
      <GoBack />
    </>
  );
};

export default ReadEnquiries;
