import React from "react";
import { CiHome } from "react-icons/ci";
import { BsRecycle } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          marginLeft: "1.5rem",
          paddingTop: "1.5rem",
        }}
      >
        <h1
          style={{
            all: "unset",
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#5d95f5",
          }}
        >
          CVToaster
        </h1>
      </div>
      <div
        style={{
          marginLeft: "2rem",
          marginTop: "3rem",
          height: "80vh",
        }}
      >
        <ul
          style={{
            all: "unset",
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <Link to="/" style={{ all: "unset" }}>
            <li
              style={{
                all: "unset",
                fontSize: "1.5rem",
                fontWeight: "300",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <CiHome />
              <label
                style={{
                  marginLeft: "10%",
                  cursor: "pointer",
                }}
              >
                {" "}
                Home{" "}
              </label>
            </li>
          </Link>
          <Link
            style={{
              all: "unset",
            }}
            to="/recyclebin"
          >
            <li
              style={{
                all: "unset",
                cursor: "pointer",
                marginTop: "3rem",
                fontSize: "1.5rem",
                fontWeight: "300",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BsRecycle />
              <label
                style={{
                  marginLeft: "10%",
                  cursor: "pointer",
                }}
              >
                {" "}
                Recycle Bin{" "}
              </label>
            </li>
          </Link>
          <li
            style={{
              all: "unset",
              marginTop: "3rem",
              fontSize: "1.5rem",
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AiOutlineFileAdd />
            <label
              style={{
                marginLeft: "10%",
              }}
            >
              {" "}
              Create Resume{" "}
            </label>
          </li>
          <li
            style={{
              all: "unset",
              marginTop: "3rem",
              fontSize: "1.5rem",
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CgProfile />
            <label
              style={{
                marginLeft: "10%",
              }}
            >
              {" "}
              Profile{" "}
            </label>
          </li>
          <li
            style={{
              all: "unset",
              marginTop: "3rem",
              fontSize: "1.5rem",
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IoIosLogOut />
            <label
              style={{
                marginLeft: "10%",
              }}
            >
              {" "}
              Log Out{" "}
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
