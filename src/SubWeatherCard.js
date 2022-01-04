import React from "react";

function SubCard({ date, condition, minTemp, maxTemp, imgText }) {
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
    <div className="SubCard">
      <h3>{date}</h3>
      <img src={convertImgTxt(imgText)} />
      <div style={{ fontWeight: "bolder" }}>
        {minTemp}&#8457; - {maxTemp}&#8457;
      </div>
      <div style={{ fontWeight: "bolder" }}>{condition}</div>
    </div>
  );
}

export default SubCard;
