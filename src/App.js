import React, { useState } from "react";
import Navbar from "./Components/Services/NavBar/Navbar";
import Home from "./Components/Services/Home/Home";
import RecycleBin from "./Components/RecycleBin/RecycleBin";

//CV Services
import RoastCV from "./Components/Services/ResumeServices/RoastCV";
import AnalyzeCV from "./Components/Services/ResumeServices/AnalyzeCV";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      {isLoggedIn && (
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              WebkitBoxShadow: "3px 0px 5px -3px rgba(0,0,0,0.75)",
              boxShadow: "3px 0px 5px -3px rgba(0,0,0,0.75)",
              width: "20%",
              // height: "100वvh",
              backgroundColor: "white",
            }}
          >
            <Navbar />
          </div>
          <div
            style={{
              marginLeft: "1.5rem",
              width: "80%",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recyclebin" element={<RecycleBin />} />
              <Route path="/roastcv" element={<RoastCV />} />
              <Route path="/anylyzecv" element={<AnalyzeCV />} />
            </Routes>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
