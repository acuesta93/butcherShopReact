import React from "react";

import {useNavigate, Link} from 'react-router-dom'

import { Button, Row } from "components";

import "./Header.scss";
import {
  faShoppingBag,
  faShoppingBasket,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

enum HeaderOptionEnum {
  Home = "home",
  Offers = "offers",
  TopSales = "top-sales",
  Explore = "explore",
  Login = "login",
}

interface HeaderProps {}
export const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  const onOptionClick = (option: HeaderOptionEnum) => {
    switch (option) {
      case HeaderOptionEnum.Home: {
        navigate('/')
        break;
      }
      case HeaderOptionEnum.Offers: {
        navigate('/offers')
        break;
      }
      case HeaderOptionEnum.TopSales: {
        break;
      }
      case HeaderOptionEnum.Explore: {
        break;
      }
      case HeaderOptionEnum.Login: {
        break;
      }
    }
  };

  return (
    <Row className="header">
      <Row className="header-side header-left">
        <HeaderOption
          label={<FontAwesomeIcon className= 'home-icon' icon={faHome} />}
          option={HeaderOptionEnum.Home}
          onOptionClick={onOptionClick}
        />
        <HeaderOption
          label="Offers"
          option={HeaderOptionEnum.Offers}
          onOptionClick={onOptionClick}
        />
        <HeaderOption
          label="Top sales"
          option={HeaderOptionEnum.TopSales}
          onOptionClick={onOptionClick}
        />
        <HeaderOption
          label="Explore"
          option={HeaderOptionEnum.Explore}
          onOptionClick={onOptionClick}
        />
      </Row>
      <Row className="header-side header-right">
        <HeaderOption
          label="Sign In"
          option={HeaderOptionEnum.Login}
          onOptionClick={onOptionClick}
        />
      </Row>

      <Row className="cart-icon-wrapper">
        <FontAwesomeIcon className="shopping-basket" icon={faShoppingBasket} />
      </Row>
    </Row>
  );
};

interface HeaderOptionProps {
  label: string | React.ReactElement;
  option: HeaderOptionEnum;
  onOptionClick(option: HeaderOptionEnum): void;
}
const HeaderOption = (props: HeaderOptionProps) => {
  return (
    <Row
      className="header-option"
      onClick={() => props.onOptionClick(props.option)}
    >
      <span className="header-option-label">
        {props.label}
      </span>
    </Row>
  );
};

