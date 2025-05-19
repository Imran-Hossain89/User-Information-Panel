import React from "react";
import { Link, redirect } from "react-router-dom";
import "./Information.css";
import Data from "./Data";

function Information(props) {
  return (
    <div className="full_div">
      <div id="texts_div">
        <h2>
          Meet Our
          <span style={{ color: "rgba(255, 168, 0, 0.98)" }}>
            {" "}
            Responsible{" "}
          </span>
          User
        </h2>
        <p>
          Start Planning your vacation with our trip guides. It's time to
          explore
        </p>
      </div>

      <div className="details">
        {Data.map((item) => (
          <div id="info_div">
            <div id="photo_div">
              <img className="image" src={item.image} />
            </div>

            <h3>{item.name}</h3>
            <h4>{item.designation}</h4>

            <div id="contact_me_div">
              <h5>Contact Me</h5>
              <img id="arrow_div" src="/public/image/arrow.png" />
            </div>

            <div id="logo_div">
              <img id="edit_logo" src="/public/image/edit.jpg" />
              <button id="read_btn">Read More</button>
              <img id="delete_logo" src="/public/image/delete.png" />
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default Information;
