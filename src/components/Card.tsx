import { Column, Row } from 'components';
import React from 'react';

import chefImage from "assets/img/chef.png";
import './Card.scss';

const examples = [{
    label: "Prueba de card"
}]

interface CardProps {}
export const Card = (props: CardProps) => {
    return (
            <Column className="card">
              <Row className='card-image'>
                
          <img src={chefImage} />
              </Row>
              <Row className='card-title'>
              {examples.map((opt) => (
                <CardOptions {...opt} key={opt.label} />
              ))}
              </Row>
            </Column>
      );
    };

interface CardOptionsProps {
    label: string;
}

const CardOptions = (props: CardOptionsProps) => {
    return (
      <Row className="card-option">
        <span className="card-option-label">{props.label}</span>
      </Row>
    );
  };