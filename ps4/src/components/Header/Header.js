import React from "react";
import styles from "./Header.module.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: "",
      searchOnlyCars: false,
      searchEngineType: "",
    };
  }

  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value }, () =>
      this.filterVehicles()
    );
  };

  handleOnlyCarsChange = (event) => {
    this.setState({ searchOnlyCars: event.target.checked }, () =>
      this.filterVehicles()
    );
  };

  handleEngineTypeChange = (event) => {
    this.setState({ searchEngineType: event.target.value }, () =>
      this.filterVehicles()
    );
  };

  filterVehicles = () => {
    const { vehicles } = this.props;
    const { searchPhrase, searchOnlyCars, searchEngineType } = this.state;

    let filteredVehicles = vehicles.filter((vehicles) =>
      vehicles.brand.includes(searchPhrase)
    );

    if (searchOnlyCars) {
      filteredVehicles = filteredVehicles.filter((vehicle2) => {
        return vehicle2.type === "car";
      });
    }

    if (searchEngineType !== "") {
      filteredVehicles = filteredVehicles.filter((vehicle) => {
        return vehicle.engineType === searchEngineType;
      });
    }

    if (searchEngineType === "all") {
      filteredVehicles = vehicles;
    }

    this.props.sendFilteredVehiclesToParentComponent(filteredVehicles);
  };

  handleResetFilters = () => {
    this.setState(
      {
        searchPhrase: "",
        searchOnlyCars: false,
        searchEngineType: "",
      },
      () => {
        this.filterVehicles();
      }
    );
  };

  getUniqueVehicleEngineTypes = () => {
    const { vehicles } = this.props;
    const vehicleEngineList = vehicles.map((vehicle) => vehicle.engineType);
    const uniqueVehicleEngineList = [...new Set(vehicleEngineList)];
    return uniqueVehicleEngineList;
  };

  render() {
    const { searchPhrase, searchOnlyCars, searchEngineType } = this.state;
    const uniqueVehicleEngineTypes = this.getUniqueVehicleEngineTypes();
    return (
      <div className={styles.HeaderWrapper}>
        <input
          type="text"
          name="search"
          id="search"
          value={searchPhrase}
          onChange={this.handleSearchPhraseChange}
          onKeyUp={this.filterVehicles}
        ></input>
        <p>Tylko Samochody</p>
        <input
          type="checkbox"
          onChange={this.handleOnlyCarsChange}
          value={searchOnlyCars}
        ></input>
        <p>Typ silnika</p>
        <select
          value={searchEngineType}
          onChange={(event) => this.handleEngineTypeChange(event)}
        >
          <option value="all">All types</option>
          {uniqueVehicleEngineTypes.map((engineType) => (
            <option key={engineType} value={engineType}>
              {engineType}
            </option>
          ))}
        </select>
        {/* <button type="button" onClick={this.filterVehicles}>
          Wyszukaj
        </button> */}

        <button type="button" onClick={this.handleResetFilters}>
          Resetuj Filtry
        </button>
      </div>
    );
  }
}

export default Header;
