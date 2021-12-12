import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { useState, useEffect } from "react";

function App() {
  const [timerValue, setTimerValue] = useState(0);

  const resetTimer = () => {
    setTimerValue(0);
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setTimerValue(timerValue + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timerValue]);

  const handleSetTimerValue = (value) => {
    setTimerValue(value);
  };

  return (
    <div className={styles.appWrapper}>
      <Header currentTimerValue={timerValue} />
      <div className={styles.columnsWrapper}>
        <LeftColumn />
        <RightColumn
          onDoubleButtonClick={resetTimer}
          onChangeInput={handleSetTimerValue}
        />
      </div>
    </div>
  );
}

export default App;
