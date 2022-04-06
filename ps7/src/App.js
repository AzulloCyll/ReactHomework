import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import airports from "./common/consts/airports";
import { uniqueId } from "lodash";

function App() {
  const userExist = localStorage.getItem("user");
  // window.localStorage.setItem("airports", JSON.stringify(airports));

  useEffect(() => {
    let airportsWithID = airports.map((airport) => ({
      ...airport,
      id: uniqueId(),
    }));
    let airportsJSON = JSON.stringify(airportsWithID);

    window.localStorage.setItem("airports", airportsJSON);
  }, []);

  if (!userExist) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.appWrapper}>
      <Header />
      <Outlet />
      {/* <div className={styles.columnsWrapper}>
        <AirportsList />
      </div> */}
    </div>
  );
}

export default App;
