import React from "react";
import Comp from "./components/Comp";
import Comp2 from "./components/Comp2";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.container}>
      <Comp text="hello from component 1" />
      <Comp2 text="hello from component 2" />
    </div>
  );
}
