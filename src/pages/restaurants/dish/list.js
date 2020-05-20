import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import Dish from "./dish";
import "./list.scss";

class View extends Component {
  closeDish = () => {
    if (this.state.dishes !== null) {
      this.setState(() => {
        return { dish_el: null };
      });
    }
  };

  showDish(dish) {
    console.log(dish);
    if (this.state.dish_el === null) {
      this.setState(() => {
        return {
          dish_el: (
            <Dish
              data={dish}
              closeDish={this.closeDish}
              dishDelivery={this.dishDelivery}
            />
          ),
        };
      });
    }
  }

  dishDelivery(heading, id) {
    console.log("Dish delivery " + heading + " id " + id);
  }

  state = {
    dish_el: null,
    image: "/user.jpg",
    heading: "Restaurant name",
    address: "Restaurant address",
    dishes: [
      { heading: "Dish name 1", price: "54.7 E", id: 1, image: "/user.jpg" },
      { heading: "Dish name 2", price: "59.7 E", id: 2, image: "/user.jpg" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="mb-2">
            <Col>
              <div className="list-heading">
                <img
                  src={this.state.image}
                  alt="Image"
                  className="list-image"
                />
                <div className="list-heading__text">{this.state.heading}</div>
                <br />
                <br />
                <br />
                <br />
                <div className="list-heading__address">
                  {this.state.address}
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          {this.state.dish_el === null ? (
            <Row>
              <Col className="text-center">
                {this.state.dishes.map((dish) => (
                  <div className="list-dish">
                    {dish.heading}
                    <br />
                    {dish.price}
                    <br />
                    <img src={dish.image} alt="Image" />
                    <br />
                    <Button color="info" onClick={() => this.showDish(dish)}>
                      Show detail
                    </Button>
                  </div>
                ))}
              </Col>
            </Row>
          ) : (
            <Row className="list-deatil">
              <Col>{this.state.dish_el}</Col>
            </Row>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default View;
