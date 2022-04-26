import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SpaceXSingle } from "./SpaceXSingle";

const BodySection = () => {
 
  const [posts, setposts] = useState([]);
  const navigate = useNavigate();

  const Api_url = "https://api.spacexdata.com/v3/launches?limit=100";

  const DisplayDetails = async () => {
    const respone = await fetch(`${Api_url}`);
    const data = await respone.json();
    console.log(data)

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
            <button onClick={()=> navigate('launch-year')}>2006</button>
             <button onClick={()=> navigate('launch-year')}>2007</button>
            </div>
            <div className="divTwo">
            <button onClick={()=> navigate('launch-year')}>2008</button>
             <button onClick={()=> navigate('launch-year')}>2009</button>
            </div>
            <div className="divThree">
            <button onClick={()=> navigate('launch-year')}>2010</button>
             <button onClick={()=> navigate('launch-year')}>2011</button>
            </div>
            <div className="divFour">
            <button onClick={()=> navigate('launch-year')}>2012</button>
             <button onClick={()=> navigate('launch-year')}>2013</button>
            </div>
           <div className="divFive">
           <button onClick={()=> navigate('launch-year')}>2014</button>
             <button onClick={()=> navigate('launch-year')}>2015</button>
           </div>
            <div className="divSix">
             <button onClick={()=> navigate('launch-year')}>2016</button>
             <button onClick={()=> navigate('launch-year')}>2017</button>
            </div>
             <div className="divSeven">
             <button onClick={()=> navigate('launch-year')}>2018</button>
             <button onClick={()=> navigate('launch-year')}>2019</button>
             </div>
             <div className="divEight">
             <button onClick={()=> navigate('launch-year')}>2020</button>
             </div>

             </div><br/>
             <div className="successfull-launch">
             <span>Successfull Launch</span><br/>
             <button onClick={()=> navigate('successfull-launch')}>True</button>
             <button onClick={()=> navigate('failed-launch')}>False</button>

             </div> <br/>
             <div className="successfull-landing">
             <span>Successfull Landing</span><br/>

             <button onClick={()=> navigate('successfull-land')}>True</button>
             <button onClick={()=> navigate('failed-landing')}>False</button>
             </div>

      </div>

      {posts?.length > 0 ? (
        <div className="contents-section">
          {posts.map((object) => (
            <SpaceXSingle key={object.flight_number} object={object}  />
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
