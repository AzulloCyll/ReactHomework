import React from 'react';
import logo from '../.././logo.svg';
// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss'

class LeftColumn extends React.Component {
    render() {
        return (
            <div className={commonColumnsStyles.App}>
              <header className={commonColumnsStyles.AppHeader}>
                <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
                <p>
                  Left column
                </p>
              </header>
            </div>
          );
    }
  }

  export default LeftColumn;