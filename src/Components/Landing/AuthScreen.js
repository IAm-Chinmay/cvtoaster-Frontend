import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { setUserInfo } from "../utils/authSlice";
import { useDispatch } from "react-redux";

function AuthScreen() {
  const dispatch = useDispatch();
  const responseMessage = (response) => {
    console.log(response.credential);
    dispatch(
      setUserInfo({
        userId: response.credential,
        isLogin: true,
      })
    );
  };
  const errorMessage = (error) => {
    alert(error);
  };
  return (
    <div>
      <div
        style={{
          height: "8rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <h5
          style={{
            all: "unset",
            fontSize: "1.3rem",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          SIGNUP or LOGIN
        </h5>
        <br />
        <h1
          style={{
            all: "unset",
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#5d95f5",
            textAlign: "center",
            width: "100%",
          }}
        >
          CVToaster
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            WebkitBoxShadow: "3px 0px 5px -3px rgba(0,0,0,0.75)",
            boxShadow: "3px 0px 5px -3px rgba(0,0,0,0.75)",
            padding: "1rem",
            marginTop: "2rem",
            width: "20%",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <hr
            style={{
              border: "1px solid black",
              width: "100%",
              marginTop: "2rem",
            }}
          />
          <h3>LinkedIn Login</h3>
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;
