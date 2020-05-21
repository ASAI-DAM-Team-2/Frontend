import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./dish.scss";

class DishView extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row className="mb-5 dish-top">
          <Col className="dish-col-top">
            <Button
              className="dish-back"
              color="secondary"
              onClick={this.props.closeDish}
            >
              &#8592;&nbsp;BACK
            </Button>
            <div className="dish-heading">{this.props.data.name}</div>
            <div className="dish-price">
              {this.props.data.price}&nbsp;&euro;
            </div>
            <Button
              className="dish-delivery"
              color="primary"
              onClick={() =>
                this.props.dishDelivery(
                  this.props.data.restaurant_id,
                  this.props.data.dish_id
                )
              }
            >
              Delivery
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{this.props.data.description}</p>
          </Col>
          <Col className="dish-image">
            <img src={this.props.data.picture} alt="Image" />
          </Col>
        </Row>
        <div className="dish-footer" />
      </React.Fragment>
    );
  }
}

export default DishView;
