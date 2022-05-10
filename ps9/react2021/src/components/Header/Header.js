import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import airports from "../../common/consts/airports";
import axios from "axios";

function Header(props) {
  console.log(props);
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  const getAirports = async () => {
    try {
      // tutaj ustawić status loading
      props.setAirportsLoadingStatus("loading");
      let airportsFromApi = await axios.get(
        "http://localhost:9000/airports/delayed"
      );
      props.setAirportsLoadingStatus("success");
      // tutaj ustawic status succes
      console.log(airportsFromApi.data);
      props.setInitialAirportsList(airportsFromApi.data);
    } catch (error) {
      // tutaj ustawic status error
      props.setAirportsLoadingStatus("error");
    }
  };

  return (
    <div className={styles.Wrapper}>
      <Typography sx={{ m: 2 }} variant="h5">
        Logged user:{" "}
        {`${currentUser.userfirstName} ${currentUser.userLastName}`}
      </Typography>
      <Link to="/">
        <Button variant="outlined">Sign out</Button>
      </Link>
      <Button onClick={() => getAirports()}>Załaduj lotniska</Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialAirportsList: (value) =>
      dispatch({ type: "SET_INITIAL_AIRPORTS_LIST", value: value }),

    setAirportsLoadingStatus: (value) => {
      dispatch({ type: "SET_AIRPORT_LOADING_STATUS", value: value });
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);
