import React, { Component } from "react";
import DropFile from "../../components/drop-file/DropFile";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./UserPage.scss";
import Alert from "../../components/alert/Alert";
import MSelect from "../../components/multiselect/multiselect";

import { fetchUser } from "../../store/actions/userActions";
import { connect } from "react-redux";

import UpdateUser from "../../components/user/UpdateUser.js";

const drop_styles = {
  border: "1px dashed black",
  width: "100%",
  color: "black",
  padding: 42,
};

class UserPage extends Component {
  componentDidMount() {
    if (!this.props.authToken) {
      this.props.history.push("/");
    } else {
      this.props.dispatch(fetchUser());
    }
  }
  state = {
    alert_el: null,
    options: [
      { label: "Grapes 🍇", value: "grapes" },
      { label: "Mango 🥭", value: "mango" },
      { label: "Mongo 2 🥭", value: "mango2" },
      { label: "Mango 3🥭", value: "mango3" },
      { label: "Strawberry 🍓", value: "strawberry", disabled: true },
      ,
    ],
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.user.Email !== this.props.user.Email ||
      prevProps.user.Name !== this.props.user.Name ||
      prevProps.user.Surname !== this.props.user.Surname
    ) {
      this.setState({ alert_el: <Alert message="Success!" type="success" /> });
    }
  }
  render() {
    const { user, updateLoading } = this.props;
    return (
      <React.Fragment>
        <div className="user-layout">
          <Container className="card-wrapper">
            <Card
              id="user-card"
              className="card-plain"
              style={{ width: "100%" }}
            >
              <h1 className="text-center">User settings</h1>
              <div id="user-menu" className="form-row text-center">
                <div className="w-25">
                  <img
                    src="/user.jpg"
                    alt="Photo"
                    width="150px"
                    height="150px"
                  />
                </div>
                <div className="w-75">
                  <DropFile styles={drop_styles} />
                </div>
              </div>
              <div className="user-list">
                {this.state.alert_el}
                <ListGroup flush>
                  {
                    // <ListGroupItem>
                    //   <MSelect
                    //     options={this.state.options}
                    //     heading="Choose your allergens"
                    //   />
                    // </ListGroupItem>
                  }
                  <ListGroupItem className="user-item" title="Email">
                    <div className="user-description">{user.Email}</div>
                  </ListGroupItem>
                  <ListGroupItem className="user-item">
                    <div className="user-description" title="First name">
                      {user.Name === "" || user.Name === null
                        ? "\u00A0"
                        : user.Name}
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="user-item">
                    <div className="user-description" title="Surname">
                      {user.Surname === "" || user.Surname === null
                        ? "\u00A0"
                        : user.Surname}
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </div>
              <div className="user-buttons">
                <UpdateUser userData={user} updateLoading={updateLoading} />
              </div>
            </Card>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    updateLoading: state.user.updateLoading,
    authToken: state.auth.authToken,
  };
};

export default connect(mapStateToProps)(UserPage);
