import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { deleteRestaurantDish } from "../../../store/actions/dishesActions";

import "./list.scss";

class DishList extends Component {
  state = {
    deleteId: "",
  };
  deleteRestaurantDishById = (e, restaurant_id, dish_id) => {
    e.preventDefault();
    console.log(restaurant_id, dish_id);
    this.props.deleteRestaurantDish(restaurant_id, dish_id);
    this.setState({ deleteId: dish_id });
  };
  editRestaurantDish = (e, restaurant_id, dish_id) => {
    e.preventDefault();
    console.log(restaurant_id, dish_id);
  };
  render() {
    const dishes = this.props.dishes;

    return (
      <React.Fragment>
        {dishes &&
          dishes.map((dish) => (
            <div className="list-dish" key={dish.dish_id}>
              <b>{dish.title}</b>
              <br />
              <b>{dish.price}</b>
              <br />
              <img src={dish.picture} alt="" />
              <br />
              <div className="list-buttons">
                <Button
                  color="primary"
                  onClick={() => this.props.showDish(dish)}
                  className="list-button-show"
                >
                  Show detail
                </Button>
                <Button color="info" className="list-button-update">
                  &#9998;
                </Button>
                <Button color="danger" className="list-button-delete">
                  &#10006;
                </Button>
              </div>
            </div>
          ))}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRestaurant: (restaurant_id, dish_id) =>
      dispatch(deleteRestaurantDish(restaurant_id, dish_id)),
  };
};

export default connect(null, mapDispatchToProps)(DishList);
