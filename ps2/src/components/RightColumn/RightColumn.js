import logo from "../.././logo.svg";
import React, { useState, useEffect } from "react";
// import styles from './RightColumn.module.scss';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function RightColumn(props) {
  const { text = "default functional text", interval } = props;
  const [initialRightCounterValue, setInitialRightCounterValue] =
    useState(5000);

  useEffect(() => {
    if (interval % 2 === 0) {
      //aktualizacja
      document.title = ":)";
    } else {
      document.title = ":(";
    }
    return () => {
      // ... odmontowywanie
      document.title = "^^__^^";
    };
  }, [interval]);

  useEffect(() => {
    //renderowanie
    console.log("right column");
  }, []);

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        {interval % 2 === 0 && (
          <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
        )}
        <p> {`Right columnn counts from ${initialRightCounterValue}`}</p>
        <p>{initialRightCounterValue + interval}</p>
      </header>
    </div>
  );
}

export default RightColumn;
