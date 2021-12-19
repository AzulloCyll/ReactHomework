import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.columnsWrapper}>
        <LeftColumn />
        <RightColumn />
      </div>
    </ div>
  );
}

export default App;
