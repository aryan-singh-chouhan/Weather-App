import React, { useEffect, useState } from 'react';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setWeatherData } from '../Redux/WeatherSlice';

const API_KEY = "b28eae4ef51ff8725bdb6425b9f70774"

const NavBar = () => {
  const [citySearch, setCitySerach] = useState("");
  const dispatch = useDispatch();

  const gatherData = async (citySearch) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API_KEY}&units=metric`
      );
      const data = res.data;
      console.log("fetched Data:")
      dispatch(setWeatherData(data))
      console.log(data)
    } catch (error) {
      console.log("fetched Error: w", error)
    }
  }

  const handleCityInput = (event) => {
    setCitySerach(event.target.value);
  }

  const handleSearch = () => {
    if (citySearch.trim() === "") {
      alert("Enter City Name")
      console.log("Enter city name")
      return;
    }
    console.log("City Entered:", citySearch);
    gatherData(citySearch)
  }

  return (
    <div className="py-1 sm:py-2 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-around bg-white/30 backdrop-blur-lg p-2 sm:p-3  md:p-4 rounded-lg shadow-[0_0_15px_5px_rgba(255,255,255,0.2)]">


        <div className="flex items-center gap-1">
          <FilterDramaIcon fontSize="small" className="md:text-base" />
          <span className="hidden sm:inline text-xs sm:text-sm md:text-base font-medium">
            Weather
          </span>
        </div>


        <div className="flex items-center gap-1">
          <input
            type="text"
            placeholder="City"
            value={citySearch}
            onChange={handleCityInput}
            className="w-full sm:w-auto h-8 sm:h-10 py-1 px-2 sm:px-3 bg-white border-none outline-none rounded-lg text-xs sm:text-sm md:text-base"
          />
          <button className="bg-white h-8 sm:h-10 py-1 px-2 sm:px-3 rounded-lg cursor-pointer text-xs sm:text-sm md:text-base" onClick={handleSearch}>
            Search
          </button>
        </div>


        <div className="flex items-center gap-1 hidden sm:inline text-xs sm:text-sm md:text-base font-medium">
          <GpsFixedIcon fontSize="small" className="hidden sm:inline text-xs sm:text-sm md:text-base font-medium" />
          <span className="hidden sm:inline text-xs sm:text-sm md:text-base font-medium">
            Current Location
          </span>
        </div>

      </div>
    </div>
  );
};

export default NavBar;