import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Topnav() {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate("/content");
  };

  return (
    <div className="nav">
      <div className="wrap1">
        <h4>Dev@Deakin</h4>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-Topnav">
          <ul>
            <li>
              <button onClick={handlePostClick}>POST</button>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
