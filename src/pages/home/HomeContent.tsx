import React from "react";

import { Row, Column } from "components";

import { Carrousel, CarrouseChild } from "./Carrousel";

import chefImage from "assets/img/chef.jpg";

import "./HomeContent.scss";

interface HomeContentProps {}
export const HomeContent = (props: HomeContentProps) => {
  return (
    <Column>
      <Row className="home-message">
        <Row className="img-wrapper">
          <img src={chefImage} />
        </Row>
        <Row className="text-wrapper">Hola, amigos de YouTube. <br></br> Soy Iván el cocinero.</Row>
      </Row>
      <Carrousel>
        <CarrouseChild>Child 1</CarrouseChild>
        <CarrouseChild>Child 2</CarrouseChild>
        <CarrouseChild>Child 3</CarrouseChild>
        <CarrouseChild>Child 4</CarrouseChild>
        <CarrouseChild>Child 5</CarrouseChild>
      </Carrousel>
    </Column>
  );
};
