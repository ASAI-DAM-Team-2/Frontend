import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import {
  deleteRestaurantDish,
  fetchRestaurantDishes,
} from "../../../store/actions/dishesActions";

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
            <div className="list-dish">
              {dish.heading}
              <br />
              {dish.price}
              <br />
              <img src={dish.image} alt="Image" />
              <br />
              <Button color="info" onClick={() => this.props.showDish(dish)}>
                Show detail
              </Button>
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
