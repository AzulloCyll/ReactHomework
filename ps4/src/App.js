import Results from "./components/Results/Results";
// import RightColumn from './components/RightColumn/RightColumn';
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import vehicles from "./common/consts/vehicles";
import { useState } from "react";

function App() {
  const [resultsToDisplay, setResultsToDisplay] = useState(vehicles);
  console.log(resultsToDisplay);

  return (
    <div className={styles.appWrapper}>
      <Header
        vehicles={vehicles}
        sendFilteredVehiclesToParentComponent={setResultsToDisplay}
      />
      <div className={styles.columnsWrapper}>
        <Results pojazdy={resultsToDisplay} />
        {/* <RightColumn /> */}
      </div>
    </div>
  );
}

export default App;
