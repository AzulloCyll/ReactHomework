// import styles from './RightColumn.module.scss';
import { useState } from "react/cjs/react.development";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function RightColumn(props) {
  const [inputValue, setInputValue] = useState(0);
  const [name, setName] = useState("");
  const [zodiac, setZodiac] = useState("");
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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleZodiacChange = (e) => {
    setZodiac(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageText(`Cześć ${name}, twój znak zodiaku to ${zodiac}`);
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

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          <br />
          <label htmlFor="zodiac">Znak zodiaku</label>
          <input
            type="text"
            name="zodiac"
            id="zodiac"
            value={zodiac}
            onChange={handleZodiacChange}
          />
          <br />
          <input type="submit" value="wyślij" />
        </form>
      </header>
    </div>
  );
}

export default RightColumn;
