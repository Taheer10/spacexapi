import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LaunchYearSingleBody } from "./LaunchYearsingleBody";

const BodySection = () => {
 
  
  const [posts, setposts] = useState([]);
  const navigate = useNavigate();

  const Api_url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2017`;

  const DisplayDetails = async () => {
    const respone = await fetch(`${Api_url}`);
    const data = await respone.json();

    setposts(data);
  };

  useEffect(() => {
    DisplayDetails();
  }, []);
  return (
    <div className="container">
      <div className="filter-section">
         <h2>Filters</h2>
             <div className="lauch-year">
             <span>Lauch Year</span><br/>
            <div className="divOne">
            <button>2006</button>
             <button>2007</button>
            </div>
            <div className="divTwo">
            <button>2008</button>
             <button>2009</button>
            </div>
            <div className="divThree">
            <button>2010</button>
             <button>2011</button>
            </div>
            <div className="divFour">
            <button>2012</button>
             <button>2013</button>
            </div>
           <div className="divFive">
           <button>2014</button>
             <button>2015</button>
           </div>
            <div className="divSix">
             <button>2016</button>
             <button>2017</button>
            </div>
             <div className="divSeven">
             <button>2018</button>
             <button>2019</button>
             </div>
             <div className="divEight">
             <button>2020</button>
             </div>

             </div><br/>
             <div className="successfull-launch">
             <span>Successfull Launch</span><br/>
             <button onClick={()=> navigate('successfull-launch')}>True</button>
             <button onClick={()=> navigate('failed-launch')}>False</button>

             </div> <br/>
             <div className="successfull-landing">
             <span>Successfull Landing</span><br/>

             <button >True</button>
             <button>False</button>
             </div>

      </div>

      {posts?.length > 0 ? (
        <div className="contents-section">
          {posts.map((object) => (
            <LaunchYearSingleBody key={object.flight_number} object={object} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Data Found</h2>
        </div>
      )}
    </div>
  );
};

export default BodySection;
