import React from "react";

function WeatherCard({ date, condition, minTemp, maxTemp, imgText }) {
  const convertImgTxt = (imgText) => {
    if (imgText === "04n") {
      return "/images/04d.png";
    } else if (imgText === "03n") {
      return "/images/03d.png";
    } else if (imgText === "09n") {
      return "/images/09d.png";
    } else if (imgText === "11n") {
      return "/images/11d.png";
    } else if (imgText === "13n") {
      return "/images/13d.png";
    } else if (imgText === "50n") {
      return "/images/50d.png";
    } else {
      return `/images/${imgText}.png`;
    }
  };

  return (
    <div className="WeatherCard">
      <h3>Today's Weather:</h3>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        {date}
      </h1>
      <div className="weather-content">
        <div>
          <img src={convertImgTxt(imgText)} />
        </div>
        <div style={{ marginLeft: "10px", fontWeight: "bolder" }}>
          {minTemp}&#8457; - {maxTemp}&#8457; <br />
          {condition}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
