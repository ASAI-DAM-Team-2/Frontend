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
// import IndexHeader from '../../components/Headers/IndexHeader';
import "./UserPage.scss";

const drop_styles = {
  border: "1px dashed black",
  width: "100%",
  color: "black",
  padding: 42,
};

class UserPage extends Component {
  state = {};
  render() {
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
                <ListGroup flush>
                  <ListGroupItem className="user-item">
                    <div className="user-description">Cras justo odio</div>
                    <div className="user-buttons">
                      <Button className="btn-link" color="primary">
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="user-item">
                    <div className="user-description">
                      Dapibus ac facilisis in
                    </div>
                    <div className="user-buttons">
                      <Button className="btn-link" color="primary">
                        edit
                      </Button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="user-item">
                    <div className="user-description">Vestibulum at eros</div>
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

export default UserPage;
