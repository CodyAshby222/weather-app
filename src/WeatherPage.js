import React, { useEffect } from "react";
import WeatherCard from "./WeatherCard";
import SubCard from "./SubWeatherCard";
import GeoCard from "./GeoCard";
import "./WeatherPage.css";

function WeatherPage() {
  const [city, setCity] = React.useState();
  const [weatherData, setWeatherData] = React.useState([]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    //let url = `openweathermapapi/forcast?q=${city}`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
    e.preventDefault();
    setCity("");
    setGeoLong("");
    setGeoLat("");
  };

  const [geoLat, setGeoLat] = React.useState();
  const [geoLong, setGeoLong] = React.useState();

  const handleGeoLatChange = (e) => {
    setGeoLat(e.target.value);
  };

  const handleGeoLongChange = (e) => {
    setGeoLong(e.target.value);
  };

  const handleGeoSubmit = (e) => {
    //let geoUrl = `openweathermapapi/weather?lat=${geoLat}&lon=${geoLong}`

    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
    e.preventDefault();
    setCity("");
    setGeoLong("");
    setGeoLat("");
  };

  //handleGeoLatChange
  //handleGeoLongChange
  //handleGeoSubmit

  useEffect(() => {
    //let defaultUrl = `openweathermapapi/forcast?q=${city}`

    fetch(defaultUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="background">
      <div className="main">
        <h1 style={{ textAlign: "center" }}>
          {weatherData?.list ? weatherData.city.name : ""}
          {weatherData?.weather ? weatherData.name : ""}
          <div className="card-container">
            <form onSubmit={handleSubmit}>
              <h6
                style={{ margin: "0px", paddingTop: "30px", fontSize: "20px" }}
              >
                Search By City Name:
              </h6>
              <input
                className="city-input"
                type="text"
                placeholder="City Name"
                value={city}
                onChange={handleChange}
              />
              <div>
                <input
                  className="city-button"
                  type="submit"
                  value="Submit City"
                />
              </div>
            </form>
            <form onSubmit={handleGeoSubmit}>
              <h6
                style={{ margin: "0px", paddingTop: "30px", fontSize: "20px" }}
              >
                Search By Geo-Location:
              </h6>
              <div className="card-container">
                <input
                  className="geo-input"
                  type="text"
                  placeholder="Latitude"
                  value={geoLat}
                  onChange={handleGeoLatChange}
                />
                <input
                  className="geo-input"
                  type="text"
                  placeholder="Longitude"
                  value={geoLong}
                  onChange={handleGeoLongChange}
                />
              </div>
              <div>
                <input
                  className="city-button"
                  type="submit"
                  value="Submit Geo"
                />
              </div>
            </form>
          </div>
        </h1>
        <div className="sm-border-bottom"></div>

        {weatherData?.list ? (
          <>
            <div className="card-container">
              <WeatherCard
                date={new Date(weatherData.list[0].dt_txt).toDateString()}
                condition={weatherData.list[0].weather[0].description}
                minTemp={weatherData.list[0].main.temp_min}
                maxTemp={weatherData.list[0].main.temp_max}
                imgText={weatherData.list[0].weather[0].icon}
              />
            </div>
            <div className="border-bottom"></div>
          </>
        ) : (
          <div></div>
        )}
        {/* weatherData?.weather    weatherData.name */}
        {weatherData?.weather ? (
          <>
            <div className="card-container">
              <GeoCard
                lat={weatherData.coord.lat}
                long={weatherData.coord.lon}
                condition={weatherData.weather[0].description}
                minTemp={weatherData.main.temp_min}
                maxTemp={weatherData.main.temp_max}
                imgText={weatherData.weather[0].icon}
              />
            </div>
          </>
        ) : (
          <div></div>
        )}

        <div className="card-container">
          {weatherData?.list ? (
            weatherData.list.map((data, index) => {
              if (index % 8 === 0) {
                const time = new Date(data.dt_txt).toDateString();
                return (
                  <SubCard
                    key={`WeatherCard_${index}`}
                    date={time}
                    condition={data.weather[0].description}
                    minTemp={data.main.temp_min}
                    maxTemp={data.main.temp_max}
                    imgText={data.weather[0].icon}
                  />
                );
              }
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
