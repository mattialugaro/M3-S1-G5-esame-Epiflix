import { Col } from "react-bootstrap";
import React from "react";

const MyPoster = ({ movie }) => {
  
  const noImageSrc = "https://i.pinimg.com/474x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg";
  return (
    <Col className="mb-2 text-center px-1">
      <img src={movie.Poster === "N/A" ? noImageSrc : movie.Poster} 
      alt="moviePicture" style={{width: "280px", height: "300px", objectFit:"contain"}}/>
    </Col>
  );
};

export default MyPoster;
