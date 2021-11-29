import React from "react";
import logo from "../.././logo.svg";
// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class LeftColumn extends React.Component {
  static defaultProps = {
    text: "Missing text from props",
  };

  constructor(props) {
    super(props);
    this.state = {
      initialTimerValue: 100,
    };
  }

  //czy nowa wartosc jest parzysta to sie przerenderuj
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.interval % 2 === 0) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidMount() {
    console.log("iyrir");
  }

  componentDidUpdate() {
    const { interval } = this.props;
    if (interval % 2 === 0) {
      console.log("even");
    } else console.log("odd");
  }

  componentWillUnmount() {
    console.log("bye");
  }

  render() {
    const { interval, text } = this.props;
    const { initialTimerValue } = this.state;

    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          {interval % 2 !== 0 && (
            <img
              src={logo}
              className={commonColumnsStyles.AppLogo}
              alt="logo"
            />
          )}
          <p>{`${text} count from ${initialTimerValue} only even numbers`}</p>
          <p>
            {initialTimerValue + (interval % 2 === 0 ? interval : interval - 1)}
          </p>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
