import React, { Component } from "react";
import { Button, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { deleteRestaurantDish } from "../../../store/actions/dishesActions";
import UpdateDish from "../../../components/restaurant/dishes/UpdateDish";

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
  removeDupliciteDishes(dishes) {
    const new_dishes = dishes.reduce((acc, current) => {
      const x = acc.find((item) => item.dish_id === current.dish_id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return new_dishes.reverse();
  }
  render() {
    let dishes = this.props.dishes.reverse();
    dishes = this.removeDupliciteDishes(dishes);
    const updateLoading = this.props.updateLoading;
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
                <UpdateDish dish={dish} updateLoading={updateLoading} />
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
