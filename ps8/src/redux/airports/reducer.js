import { initialAirportsState } from "./initialState";
import airports from "../../common/consts/airports";

export const airportReducer = (state = initialAirportsState, action) => {
  switch (action.type) {
    case "SET_INITIAL_AIRPORTS_LIST":
      return { ...state, airports: airports };
    case "REMOVE_AIRPORT_BY_ID":
      return {
        ...state,
        airports: state.airports.filter(
          (airport) => airport.id !== action.value
        ),
      };
    default:
      return state;
  }
};
