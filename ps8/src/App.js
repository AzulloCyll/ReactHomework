import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import airports from "./common/consts/airports";

function App(props) {
  const userExist = localStorage.getItem("user");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_INITIAL_AIRPORTS_LIST" });
  }, []);

  if (!userExist) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setInitialAirportsList: (value) =>
//       dispatch({ type: "SET_INITIAL_AIRPORTS_LIST", value: value }),
//   };
// };

// export default connect(null, mapDispatchToProps)(App);

export default App;
