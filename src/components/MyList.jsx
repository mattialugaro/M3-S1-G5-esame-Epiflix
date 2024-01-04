import {Container, Row } from "react-bootstrap";
import MyPoster from "./MyPoster";
import React, { useState, useEffect } from "react";

const MyList = ({ content, moviesName }) => {
  const [data, setData] = useState([]);

  const movieUrl = `http://www.omdbapi.com/?apikey=2cb73588&s=${moviesName}`;
  useEffect(() => {
    fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.Search);
       });
  }, []);

  return (
    <Container fluid className="bg pb-4">
      <h4 className="text-white">{content}</h4>
      <Row xs={1} sm={2} lg={4} xl={6}>
        {data.map((m, ix) => (
          <MyPoster key={`movie${ix}`} movie={m} />
        ))}
      </Row>
    </Container>
  );
};

export default MyList;
