import React from "react";
// import styles from './Results.module.scss';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class Results extends React.Component {
  render() {
    const { pojazdy } = this.props;

    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <ul>
            {pojazdy.map((pojazd) => (
              <li key={pojazd.model}>{`${pojazd.brand} ${pojazd.model}`}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default Results;
