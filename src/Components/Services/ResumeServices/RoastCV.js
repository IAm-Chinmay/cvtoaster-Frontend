import React from "react";
import { TbReload } from "react-icons/tb";
import { MdOutlineSaveAlt } from "react-icons/md";

function RoastCV() {
  return (
    <div>
      <div
        style={{
          marginTop: "3rem",
          marginLeft: "2rem",
        }}
      >
        <h1>Resume Roast For Amey</h1>
        <label
          style={{
            fontSize: "1.2rem",
            fontWeight: "200",
          }}
        >
          Amey_Kadam-Resume.pdf
        </label>
      </div>
      <div
        style={{
          marginTop: "2rem",
          width: "90%",
          backgroundColor: "#ADD8E6",
          padding: "1rem",
          borderRadius: "15px",
        }}
      >
        <label
          style={{
            fontSize: "1.3rem",
            lineHeight: "2",
            fontWeight: "200",
          }}
        >
          Hi Guys!! This article contains a lot of links, but believe me, after
          reading them you’ll get started with React JS right away. If reading
          is not what you looking for, add the Natural Reader Text to Speech
          extension to your chrome and make your life easy. :)Honestly, I wasted
          a lot of my time searching for the best material to get started. But
          didn’t find a single best roadmap to learn REACT. So I gathered
          everything which I as a beginner needed to learn React. If you don’t
          have a software degree, don’t worry I got you too. This article is for
          all. Let's get started ReactJS is a declarative, efficient, and
          flexible JavaScript library for building reusable UI components. It is
          an open-source, component-based front-end library which is responsible
          only for the view layer of the application. It was initially developed
          and maintained by Facebook and later used in its products like
          WhatsApp & Instagram.ReactJS is a declarative, efficient, and flexible
          JavaScript library for building reusable UI components. It is an
          open-source, component-based front-end library which is responsible
          and ma
        </label>
      </div>
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          width: "50%",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            backgroundColor: "#5d95f5",
            width: "15rem",
            display: "flex",
            justifyContent: "space-evenly",
            height: "2.8rem",
            alignItems: "center",
            borderRadius: "15px",
            cursor: "pointer",
          }}
        >
          <TbReload
            style={{
              fontWeight: "800",
              color: "white",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          />
          <label
            style={{
              color: "white",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Regenerate Response
          </label>
        </div>
        <div
          style={{
            backgroundColor: "#5d95f5",
            width: "12rem",
            display: "flex",
            justifyContent: "space-evenly",
            height: "2.8rem",
            alignItems: "center",
            borderRadius: "15px",
            cursor: "pointer",
          }}
        >
          <MdOutlineSaveAlt
            style={{
              fontWeight: "800",
              color: "white",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          />
          <label
            style={{
              color: "white",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Save Response
          </label>
        </div>
      </div>
    </div>
  );
}

export default RoastCV;
