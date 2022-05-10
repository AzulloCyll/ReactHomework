import { initialAirportsState } from "./initialState";

export const airportReducer = (state = initialAirportsState, action) => {
  switch (action.type) {
    case "SET_INITIAL_AIRPORTS_LIST":
      return { ...state, airports: action.value };
    case "REMOVE_AIRPORT_BY_ID":
      return {
        ...state,
        airports: state.airports.filter(
          (airport) => airport.id !== action.value
        ),
      };
    case "SET_AIRPORT_LOADING_STATUS":
      return { ...state, airportsLoadingStatus: action.value };
    case "SET_SELECTED_AIRPORT":
      return { ...state, selectedAirport: action.value };
    default:
      return state;
  }
};
