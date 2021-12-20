import React from "react";
import Form from "../Components/Form/Form";

// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      messageText: "",
    };
  }

  componentDidMount() {
    console.log("mounted");
  }

  componentWillUnmount() {
    console.log("unmonted");
  }

  componentDidUpdate() {
    console.log("updated");
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

  setMessage = (message) => {
    this.setState({ messageText: message });
  };

  render() {
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <button
            onClick={this.handleIncreaseCounter}
            onContextMenu={this.handleDecreaseCounter}
          >
            Left click + 1 / Right click -1
          </button>
          <p>Counter: {this.state.counter}</p>
          <p>{this.state.messageText}</p>
          <Form sendMessageToParentComponent={this.setMessage} />
        </header>
      </div>
    );
  }
}

export default LeftColumn;
