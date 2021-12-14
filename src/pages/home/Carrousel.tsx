import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "components";
import React from "react";

import "./Carrousel.scss";

interface CarrouselProps {}
export const Carrousel = (props: React.PropsWithChildren<CarrouselProps>) => {
  const [index, setIndex] = React.useState(0);

  const count = React.Children.count(props.children);

  const x = React.useMemo(() => {
    return index * 100;
  }, [index, props.children]);

  return (
    <Row className="carrousel">
      <FontAwesomeIcon
        className="arrows arrow-left"
        onClick={() => {
          if (index <= 0) {
            setIndex(count - 1);
          } else {
            setIndex(index - 1);
          }
        }}
        icon={faChevronCircleLeft}
      />
      <Row
        className="carrousel-content"
        style={{ transform: `translateX(-${x}%)` }}
      >
        {props.children}
      </Row>
      <FontAwesomeIcon
        className="arrows arrow-right"
        onClick={() => {
          if (index < count - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
        icon={faChevronCircleRight}
      />
    </Row>
  );
};

export const CarrouseChild = (props: React.PropsWithChildren<{}>) => {
  return <Row className="carrousel-child">{props.children}</Row>;
};
