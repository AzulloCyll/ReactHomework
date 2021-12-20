// import styles from './RightColumn.module.scss';
import { useState } from "react/cjs/react.development";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import Form from "../Components/Form/Form";

function RightColumn(props) {
  const [inputValue, setInputValue] = useState(0);
  const [messageText, setMessageText] = useState("");

  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  };

  function handleInputValueChange(e) {
    setInputValue(e.target.value);
  }

  const handleNewTimer = () => {
    props.changeTimer(inputValue);
  };

  const handleMessageSet = (message) => {
    setMessageText(message);
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
        <p>{messageText}</p>
        <Form sendMessageToParentComponent={handleMessageSet} />
      </header>
    </div>
  );
}

export default RightColumn;
