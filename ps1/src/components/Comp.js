import React, { Component } from "react";
import styles from "../App.module.scss";

export default class Comp extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <p>{this.props.text}</p>
        <a href="http://google.pl">{this.props.text}</a>
      </div>
    );
  }
}
