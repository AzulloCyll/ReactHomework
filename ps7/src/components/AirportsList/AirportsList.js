import React from "react";
import { useNavigate } from "react-router-dom";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList() {
  let airports = JSON.parse(localStorage.getItem("airports"));
  let navigate = useNavigate();

  const onNameClick = (e) => {
    navigate(`/airport/details/${e}`);
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        {airports.map((airport) => {
          return (
            <div key={airport.id} onClick={() => onNameClick(airport.id)}>
              <span>{airport.id}. </span>
              <span>{airport.name}</span>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default ProductsList;
