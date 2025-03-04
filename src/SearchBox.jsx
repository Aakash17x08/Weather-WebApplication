import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "use your own API_KEY";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRessponse = await response.json();
      console.log(jsonRessponse);
      let result = {
        temp: jsonRessponse.main.temp,
        tempMin: jsonRessponse.main.temp_min,
        tempMax: jsonRessponse.main.temp_max,
        humidity: jsonRessponse.main.humidity,
        feelsLike: jsonRessponse.main.feels_like,
        city: jsonRessponse.name,
        description: jsonRessponse.weather[0].description,
        // icon: jsonRessponse.weather[0].icon,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit} action="">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          style={{color:"black", border:"2px solid ", borderRadius:"10px"}}
        />
        <br></br>
        <br></br>
        <Button
          variant="contained"
          type="submit"
          style={{color:"black", border:"2px solid ", borderRadius:"10px"}}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 20px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          Search
        </Button>

        {error && <p style={{ color: "red" }}>City not found!</p>}
      </form>
    </div>
  );
};

export { SearchBox };
