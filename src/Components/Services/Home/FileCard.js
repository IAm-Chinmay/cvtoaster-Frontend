import React from "react";

function FileCard() {
  return (
    <>
      {" "}
      <div
        style={{
          width: "20%",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "#ADD8E6",
          borderRadius: "15px",
          marginLeft: "2rem",
        }}
      >
        <label
          style={{
            marginLeft: "1rem",
            fontSize: "1.3rem",
            fontWeight: "600",
            color: "blue",
          }}
        >
          Resume Name
        </label>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li
            style={{
              all: "unset",
              marginTop: ".6rem",
              color: "red",
            }}
          >
            Roast Me
          </li>
          <li
            style={{
              all: "unset",
              marginTop: ".6rem",
              color: "green",
            }}
          >
            Give Feedback
          </li>
          <li
            style={{
              all: "unset",
              marginTop: ".6rem",
              color: "blue",
            }}
          >
            Edit My Resume
          </li>
          <li
            style={{
              all: "unset",
              marginTop: ".6rem",
              color: "orange",
            }}
          >
            Prep Me for Interview
          </li>
        </ul>
      </div>
    </>
  );
}

export default FileCard;
