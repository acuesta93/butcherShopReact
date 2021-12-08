import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faPhone,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Column, Row } from "components";

import "./Footer.scss";

const leftOptions = [
  {
    label: "/theButcherStore",
    icon: faInstagram,
  },
  {
    label: "theButcherStore",
    icon: faFacebook,
  },
  {
    label: "@theButcherStore",
    icon: faTwitter,
  },
];

const rightOptions = [
  {
    label: "fakebutcher@mail.com",
    icon: faEnvelope,
  },
  {
    label: "C/ Falsa 123, Pais de la Piruleta",
    icon: faMapMarkerAlt,
  },
  {
    label: "+34 963 852 412",
    icon: faPhone,
  },
];

interface FooterProps {}
export const Footer = (props: FooterProps) => {
  return (
    <Row className="footer">
      <Row className="footer-side footer-left ">
        <Column className="option-list">
          {leftOptions.map((opt) => (
            <FooterOptions {...opt} key={opt.label} />
          ))}
        </Column>
      </Row>
      <Row className="footer-side footer-right ">
        <Column className="option-list">
          {rightOptions.map((opt) => (
            <FooterOptions {...opt} key={opt.label} /> //{...opt} -> label = {opt.label} icon = {opt.icon}
          ))}
        </Column>
      </Row>
    </Row>
  );
};

interface FooterOptionsProps {
  label: string;
  icon: IconDefinition;
}

const FooterOptions = (props: FooterOptionsProps) => {
  return (
    <Row className="footer-option">
      <span className="footer-option-icon">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <span className="footer-option-label">{props.label}</span>
    </Row>
  );
};
