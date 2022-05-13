import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import airports from "../../common/consts/airports";

function Header() {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));
  const dispatch = useDispatch();

  return (
    <div className={styles.Wrapper}>
      <Typography sx={{ m: 2 }} variant="h5">
        Logged user:{" "}
        {`${currentUser.userfirstName} ${currentUser.userLastName}`}
      </Typography>
      <Link to="/">
        <Button variant="outlined">Sign out</Button>
      </Link>
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: "SET_INITIAL_AIRPORTS_LIST" })}
      >
        Reset List
      </Button>
    </div>
  );
}

export default Header;
