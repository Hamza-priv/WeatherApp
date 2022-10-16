import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Cities_Api, citiesOptions } from "../Api";

function Search({ onSearchChange }) {
  const [Search, setSearch] = useState(null);
  const loadCities = async (inputValue) => {
    try {
          const response = await fetch(
              `${Cities_Api}/cities?minPopulation=100000&namePrefix=${inputValue}`,
              citiesOptions
          );
          const response_1 = await response.json();
          return {
              options: response_1.data.map((city) => {
                  return {
                      value: `${city.latitude} ${city.longitude}`,
                      label: `${city.name}, ${city.country}`,
                  };
              }),
          };
      } catch (err) {
          return console.error(err);
      }
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <div>
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={400}
        value={Search}
        onChange={handleOnChange}
        loadOptions={loadCities}
      />
    </div>
  );
}

export default Search;
