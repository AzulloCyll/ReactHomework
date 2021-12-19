// import styles from './RightColumn.module.scss';
import { useState } from "react/cjs/react.development";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function RightColumn(props) {
  const [inputValue, setInputValue] = useState(0);

  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  };

  function handleInputValueChange(e) {
    setInputValue(e.target.value);
  }

  const handleNewTimer = () => {
    props.changeTimer(inputValue);
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <button onDoubleClick={handleDoubleClick}>
          Double click should reset a timer
        </button>
        <input
          onChange={(event) => handleInputValueChange(event)}
          value={inputValue}
          type="number"
        />
        <button onClick={handleNewTimer}>Set value from input to timer</button>
      </header>
    </div>
  );
}

export default RightColumn;
