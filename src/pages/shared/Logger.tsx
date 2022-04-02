import { Button, Column, Row } from "components";
import React from "react";

import "./Logger.scss";

interface LoggerProps {}
export const Logger = (props: LoggerProps) => {
  return (
    <Column className="logger">
      <Row className="logger-info">
        <Column>
          <Row className="logger-username">
            <label className="username">
              Username: <input type="text" />
            </label>
          </Row>
          <Row className="logger-pass">
            <label className="password">
              Password: <input type="text" />
            </label>
          </Row>
        </Column>
      </Row>

      <Row className="logger-button">
        <Button>OK</Button>
      </Row>
    </Column>
  );
};
