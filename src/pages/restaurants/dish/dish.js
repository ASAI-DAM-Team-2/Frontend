import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./dish.scss";

class Dish extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="mb-2">
            <Col>
              <Button color="secondary" onClick="{data.closeDish()}">
                &#8592;&nbsp;BACK
              </Button>
              <div className="dish-heading">{data.heading}</div>
              <div className="dish-price">{data.price}</div>
              <div
                className="dish-delivery"
                onClick="{data.dishDelivery(data.heading, data.id)}"
              >
                Delivery
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{data.info}</p>
            </Col>
            <Col className="dish-image">{data.image}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Dish;
