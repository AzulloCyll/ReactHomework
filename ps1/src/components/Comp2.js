import React from "react";
import styles from "../App.module.scss";

export default function Comp2(props) {
  return (
    <div className={styles.wrapper}>
      <p>{props.text}</p>
      <a href="http://google.pl">{props.text}</a>
    </div>
  );
}
