import commonColumnsStyles from "../../common/styles/Columns.module.scss";

import { useState } from "react";

function RightColumn(props) {
  const [buttonText] = useState("Reset Counter");
  const [currentTimerValue, setTimerValue] = useState(0);

  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  };

  const handleInputChange = (event) => {
    setTimerValue(event.target.value);
  };

  const setNewTimerValue = () => {
    props.onChangeInput(parseInt(currentTimerValue));
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Right column</p>
        <button onDoubleClick={handleDoubleClick}> {buttonText} </button>
        <input
          type="number"
          value={currentTimerValue}
          onChange={(event) => handleInputChange(event)}
        />
        <button onClick={setNewTimerValue}>
          Set value from input to timer
        </button>
      </header>
    </div>
  );
}

export default RightColumn;
