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

const drop_styles = {
  border: "1px dashed black",
  width: "100%",
  color: "black",
  padding: 42,
};

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
    console.log(this.props);
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
  render() {
    const { user } = this.props;
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
                {this.state.alert_el}
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
                <ListGroup flush>
                  <ListGroupItem>
                    <MSelect
                      options={this.state.options}
                      heading="Choose your allergens"
                    />
                  </ListGroupItem>
                  <ListGroupItem className="user-item">
                    <div className="user-description">Ahoj</div>
                    <div className="user-buttons">
                      <Button className="btn-link" color="primary">
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="user-item">
                    <div className="user-description">Current password</div>
                    <div className="user-buttons">
                      <Button className="btn-link" color="primary">
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="user-item">
                    <div className="user-description">New password</div>
                    <div className="user-buttons">
                      <Button className="btn-link" color="primary">
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="user-item">
                    <div className="user-description">Repeat new password</div>
                    <div className="user-buttons">
                      <Button className="btn-link" color="primary">
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                </ListGroup>
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
  };
};

export default connect(mapStateToProps)(UserPage);
