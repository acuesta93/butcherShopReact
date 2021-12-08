import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "components";
import React from "react";

import "./Carrousel.scss";

interface CarrouselProps {}

export const Carrousel = (props: CarrouselProps) => {
  return <Row className="carrousel">
      <FontAwesomeIcon className = "arrows arrow-left" icon={faChevronCircleLeft} />
      <Row className='carrouse-content'></Row>
      <FontAwesomeIcon className = "arrows arrow-right" icon={faChevronCircleRight} />
  </Row>;
};

// interface CarrouselOptionProps {
//     label: string,
//     img: img
// }

// const CarrouselOptions = (props: CarrouselOptionProps) => {
//     return (
//         <Row></Row>
//     )
// }
