import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import React, { useState } from "react";

function App() {
  const leftColumnText = "Left Text";
  const rightColumnText = "Right Text";
  const [intervalValue, setIntervaValue] = useState(0);

  setTimeout(() => {
    setIntervaValue(intervalValue + 1);
  }, 1000);

  return (
    <div className={styles.appWrapper}>
      <Header interval={intervalValue} />
      <div className={styles.columnsWrapper}>
        {intervalValue < 3 && <LeftColumn interval={intervalValue} />}
        <RightColumn interval={intervalValue} text={rightColumnText} />
      </div>
    </div>
  );
}

export default App;
