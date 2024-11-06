import React from "react";
import { CiSearch } from "react-icons/ci";
import { PiPlusLight } from "react-icons/pi";
import FileCard from "./FileCard";

function Home() {
  return (
    <div style={{}}>
      <div
        style={{
          width: "70rem",
          marginTop: "4rem",
          display: "flex",
          alignItems: "center",
          marginLeft: "3rem",
        }}
      >
        <CiSearch
          style={{
            fontSize: "1.5rem",
          }}
        />
        <input
          style={{
            all: "unset",
            width: "80%",
            height: "3rem",
            marginLeft: "1rem",
          }}
          placeholder="Search your files..."
        />
      </div>
      <div
        style={{
          marginTop: "4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "2rem",
            width: "100%",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "20%",
              height: "8rem",
              cursor: "pointer",
              marginLeft: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#ADD8E6",
                width: "4rem",
                borderRadius: "35px",
                height: "4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PiPlusLight
                style={{
                  fontSize: "3rem",
                  fontWeight: "100",
                  color: "blue",
                }}
              />
            </div>
            <label
              style={{
                marginTop: "1rem",
                fontWeight: "400",
                color: "blue",
                fontSize: "1.2rem",
              }}
            >
              Create
            </label>
          </div>
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
