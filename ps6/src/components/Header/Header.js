import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";

const clearUser = () => {
  localStorage.removeItem("userinfo");
};

function Header() {
  const userDetails = JSON.parse(localStorage.getItem("userinfo"));
  return (
    <div className={styles.Wrapper}>
      Header
      <Link to="/">
        <button onClick={clearUser}>Sign Out</button>
      </Link>
      <p>
        Jesteś zalogowany jako {userDetails.userName} {userDetails.lastName}
      </p>
    </div>
  );
}

export default Header;
