import React from "react";
import Card from "../Card/Card";
import "./Dashboard.css";

function Dashboard({ data, checkMoreClicked }) {
  return (
    <div className="main-page">
      <div className="container">
        {data &&
          data.map((item, index) => (
            <div className="item" key={index}>
              <Card url={item.url || `https://pokeapi.co/api/v2/pokemon/${item.name}`} checkMoreClicked={checkMoreClicked} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
