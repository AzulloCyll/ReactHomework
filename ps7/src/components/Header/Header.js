import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

function Header() {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className={styles.Wrapper}>
      <p>
        Logged user:
        {`${currentUser.userfirstName} ${currentUser.userLastName}`}
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ m: "20px" }}>
          Sign out
        </Button>
      </Link>
    </div>
  );
}

export default Header;
