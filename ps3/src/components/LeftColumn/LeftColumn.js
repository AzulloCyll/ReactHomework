import React from "react";

// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncreaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecreaseCounter = (e) => {
    e.preventDefault();
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <p>Left column</p>
          <p>Counter: {counter}</p>
          <button
            onClick={this.handleIncreaseCounter}
            onContextMenu={this.handleDecreaseCounter}
          >
            {" "}
            INCREASE BY 1{" "}
          </button>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
