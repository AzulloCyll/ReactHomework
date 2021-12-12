import React from "react";
import styles from "./Header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.HeaderWrapper}>{this.props.currentTimerValue}</div>
    );
  }
}

export default Header;
