import { React, useState } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Paper } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

import { connect } from "react-redux";

function AirportsList({
  airportsFromRedux,
  airportsLoadingStatus,
  setAirportsLoadingStatus,
  setSelectedAirport,
  airportsListLoadingError,
}) {
  const [loadingAirportId, setLoadingAirportId] = useState(null);
  let navigate = useNavigate();

  const navigateToDetails = async (airport) => {
    try {
      setLoadingAirportId(airport.id);
      const response = await axios.get(
        `http://localhost:9000/airports/${airport.id}/delayed`
      );
      setSelectedAirport(response.data);
      setLoadingAirportId(null);
      navigate(`/airport/details/${airport.id}`);
    } catch (error) {
      setLoadingAirportId(null);
      console.log(error);
    }
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Lista lotnisk</p>
        <Stack spacing={2}>
          {airportsLoadingStatus === "loading" ? (
            <CircularProgress />
          ) : (
            airportsFromRedux?.map((airport, index) => (
              <Box key={airport.id} onClick={() => navigateToDetails(airport)}>
                {loadingAirportId && loadingAirportId === airport.id ? (
                  <CircularProgress />
                ) : (
                  <Paper>{`${airport.name} - ${airport.id}`}</Paper>
                )}
              </Box>
            ))
          )}
        </Stack>
      </header>
      <Snackbar
        open={airportsLoadingStatus === "error"}
        autoHideDuration={4000}
        onClose={() => setAirportsLoadingStatus("initial")}
        message={airportsListLoadingError}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAirportsLoadingStatus: (value) => {
      dispatch({ type: "SET_AIRPORT_LOADING_STATUS", value: value });
    },
    setSelectedAirport: (value) =>
      dispatch({ type: "SET_SELECTED_AIRPORT", value: value }),
  };
};

const mapStateToProps = (state) => {
  // state - dane pochodzące z redux sotre'a
  return {
    airportsFromRedux: state.airport.airports,
    airportsLoadingStatus: state.airport.airportsLoadingStatus,
    airportsListLoadingError: state.airport.loadingAirportsError,
    // airportsFromRedux - tak będzie się nazywał props wewnątrz komponentu
    // state.airport.airports - źródło danych które mają być dostępne jako "props.airportsFromRedux"
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirportsList);
