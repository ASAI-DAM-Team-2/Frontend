import React, { Component } from "react";
import { Button, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { deleteRestaurantDish } from "../../../store/actions/dishesActions";

import "./list.scss";

class DishList extends Component {
  state = {
    deleteId: "",
  };
  deleteRestaurantDishById = (e, id) => {
    e.preventDefault();
    this.props.deleteRestaurantDish(id);
    this.setState({ deleteId: id });
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
              <b>{dish.price}&nbsp;&euro;</b>
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
                <form
                  className="list-button-delete"
                  onSubmit={(e) =>
                    this.deleteRestaurantDishById(
                      e,
                      dish.dish_id,
                      deleteRestaurantDish
                    )
                  }
                >
                  <div>
                    {this.props.deleteLoading &&
                    this.state.deleteId === dish.dish_id ? (
                      <div className="spinner-loading w-100">
                        <Spinner size="sm" color="danger" />
                      </div>
                    ) : (
                      <Button color="danger" className="w-100">
                        &#10006;
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          ))}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRestaurantDish: (id) => dispatch(deleteRestaurantDish(id)),
  };
};

export default connect(null, mapDispatchToProps)(DishList);
