import { Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const MyPoster = moviesName => {
    const movieUrl = `http://www.omdbapi.com/?apikey=2cb73588&s=${moviesName}`;
  
    const [data, setData] = useState();
  
    useEffect(() => {
      fetch(movieUrl)
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    const movies = data?.Search?.map((movie, index) => (
        <Col key={index} className="mb-2 text-center px-1">
            <img src={movie.poster} alt="moviePicture" />
        </Col>
    ));
  
    return (
        <Row xs={1} sm={2} lg={4} xl={6}>
            {movies}
        </Row>
    );
  };
  
  export default MyPoster;