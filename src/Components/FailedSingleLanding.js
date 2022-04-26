import React from "react";
import './Space.css'
export const FailedSingleLAnding = ({ object }) => {
  return (
    <div
      className="box"
      style={{ border: "1px solid white" }}
    >
      <div className="imagediv">
        <img
          src={
            object.mission_patch !== "N/A"
              ? object.links.mission_patch
              : "https://viaplaceholder.com/200"
          }
         
          alt="spacex"
        />
      </div>
      <div>
        <h5>
          {object.mission_name}#{object.flight_number}
        </h5>
      </div>

      <div>
      <p>Mission Ids:{object.mission_id ? (<span>{object.mission_id}</span>) : 'Null'}</p>
      </div>
      <div>
        <p>Launch Year:{object.launch_year}</p>
      </div>
      <div>
        <p>Successfull Mission:{object.launch_success}</p>
      </div>
      <div>
        <p>Successfull Landing:{object.land_success}</p>
      </div>
    </div>
  );
};
