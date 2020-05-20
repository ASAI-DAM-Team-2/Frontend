import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./dish.scss";

class Dish extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row className="mb-5 dish-top">
          <Col className="d-flex">
            <Button color="secondary" onClick={this.props.closeDish}>
              &#8592;&nbsp;BACK
            </Button>
            <div className="dish-heading">{this.props.data.heading}</div>
            <div className="dish-price">{this.props.data.price}</div>
            <Button
              className="dish-delivery"
              color="primary"
              onClick={() =>
                this.props.dishDelivery(
                  this.props.data.heading,
                  this.props.data.id
                )
              }
            >
              Delivery
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{this.props.data.info}</p>
          </Col>
          <Col className="dish-image">
            <img src={this.props.data.image} alt="Image" />
          </Col>
        </Row>
        <div className="dish-footer" />
      </React.Fragment>
    );
  }
}

export default Dish;
