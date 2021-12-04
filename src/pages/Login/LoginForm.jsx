import React from "react";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import LoginSchema from "../../schemas/LoginSchema";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import FormError from "../../components/common/FormError";
import { StyledForm, StyledFormWrapper } from "../../styles/FormStyle";
import { Button } from "../../styles/Button";

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const [auth, setAuth] = useContext(AuthContext);
  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(BASE_URL + "/" + TOKEN_PATH, data);
      setAuth(response.data);
      console.log(response);
      history.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <StyledFormWrapper>
        <StyledForm
          onSubmit={handleSubmit(onSubmit)}
          className="login-form"
          disabled={submitting}
        >
          {loginError && <FormError>Invalid username or password.</FormError>}
          <label htmlFor="identifier">Username</label>
          <input
            name="identifier"
            placeholder="Username"
            {...register("identifier")}
          />
          {errors.identifier && (
            <span style={{ color: "red" }}>{errors.identifier.message}</span>
          )}
          <label htmlFor="Password">Password</label>
          <input
            name="password"
            placeholder="Password"
            {...register("password")}
            type="password"
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
          <Button type="submit">{submitting ? "Loggin in..." : "Login"}</Button>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

LoginForm.propTypes = {
  identifier: PropTypes.string,
  password: PropTypes.string,
};

export default LoginForm;
