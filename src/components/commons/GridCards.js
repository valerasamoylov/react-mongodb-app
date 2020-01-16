import React from "react";
import { Col } from "antd";
import "./GridCards.css";

function GridCards(props) {
  let { key, image, movieId, movieName } = props;

  return (
    <Col key={key} lg={6} md={8} xs={24}>
      <div>
        <a href={`/movie/${movieId}`}>
          <img alt={movieName} src={image} />
        </a>
      </div>
    </Col>
  );
}

export default GridCards;
