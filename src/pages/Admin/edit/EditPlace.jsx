import React from "react";
import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import { BASE_URL, ACCOMMODATION_PATH } from "../../../constants/api";
import LoaderIndicator from "../../../components/common/LoaderIndicator";
import EditSchema from "../../../schemas/EditSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../components/common/FormError";
import FormSuccess from "../../../components/common/FormSuccess";
import {
  StyledForm,
  StyledFormWrapper,
  RadioButtons,
} from "../../../styles/FormStyle";
import { Button } from "../../../styles/Button";
import Heading from "../../../components/layout/headings/Heading";
import GoBack from "../../../components/common/GoBack";

export default function EditPlace() {
  const [place, setPlace] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchPlace, setFetchPlace] = useState(true);
  const [success, setSuccess] = useState(null);
  const [updatingPlace, setUpdatingPlace] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(EditSchema),
  });

  const http = useAxios();
  let { id } = useParams();
  const history = useHistory();
  const url = `${BASE_URL + "/" + ACCOMMODATION_PATH + "/"}${id}`;

  useEffect(function () {
    async function getPlace() {
      try {
        const response = await http.get(url);
        console.log(response.data);
        setPlace(response.data);
      } catch (error) {
        console.log(error);
        setFetchError(error.toString());
      } finally {
        setFetchPlace(false);
      }
    }

    getPlace();
  }, []);
  async function onSubmit(data) {
    setUpdatingPlace(true);
    setUpdateError(null);
    setUpdated(false);

    console.log(data);

    try {
      const response = await http.put(url, data);
      console.log(response.data);
      setUpdated(true);
      setSuccess("Successfully updated place. Redirecting to admin...");
    } catch (error) {
      console.log("error", error);
      setUpdateError(error.toString());
    } finally {
      setUpdatingPlace(false);
    }
  }

  if (fetchPlace) return <LoaderIndicator />;

  if (fetchError) return <div>Error loading place</div>;
  if (success) {
    setTimeout(() => {
      history.push("/admin");
    }, 5000);
    return <FormSuccess message={success} />;
  }
  return (
    <>
      <Heading title="Edit place" />
      <StyledFormWrapper>
        {errors && <FormError>{updateError}</FormError>}
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Enter Title</label>
          <input
            name="title"
            defaultValue={place.title}
            placeholder={place.title}
            {...register("title")}
            type="text"
          />
          <RadioButtons>
            <label htmlFor="featured">Featured?</label>
            <input
              name="featured"
              {...register("featured")}
              type="checkbox"
              defaultChecked={true}
            />
          </RadioButtons>
          <label htmlFor="price">Price</label>
          <input
            name="price"
            {...register("price")}
            type="number"
            placeholder={place.price}
            defaultValue={place.price}
          />
          <label htmlFor="description">Write the description here.</label>
          <textarea
            defaultValue={place.description}
            name="description"
            placeholder={place.description}
            {...register("description")}
            type="text"
          />
          <Button>Submit</Button>
        </StyledForm>
      </StyledFormWrapper>
      <GoBack />
    </>
  );
}
