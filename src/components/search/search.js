import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoCity, GEO_URL_API } from "../../api/api";

function Search({onSearch}) {
  const [value, setValue] = useState(null);

  const handleOnChange = (data) => {
    setValue(data);
    onSearch(data);
  };
  const handleOptions = (inputValue) => {
    return fetch(
      `${GEO_URL_API}cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoCity
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={value}
        onChange={handleOnChange}
        loadOptions={handleOptions}
      />
    </>
  );
}

export default Search;
