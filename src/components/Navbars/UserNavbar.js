import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import "./Navbar.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { removeRestaurants } from "../../store/actions/restaurantActions";
import { removeDishes } from "../../store/actions/dishesActions";
import { signOut } from "../../store/actions/authActions";
import { fetchUser } from "../../store/actions/userActions";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

class IndexNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarColor: "navbar-transparent",
      navbarCollapse: "false",
      navbarPosition: "",
      transparentPages: ["/", "/register"],
      isTransparentNav: false,
    };
  }

  componentDidMount() {
    this.setNavbarClasses();
    this.props.history.listen(() => {
      this.setNavbarClasses();
    });

    this.props.dispatch(fetchUser());

    window.addEventListener("scroll", this.updateNavbarColor.bind(this));

    return function cleanup() {
      window.removeEventListener("scroll", this.updateNavbarColor.bind(this));
    };
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
  }

  setNavbarClasses() {
    const isTransparentNav = this.state.transparentPages.includes(
      this.props.history.location.pathname
    );
    this.setState({
      isTransparentNav: isTransparentNav,
    });
    if (!isTransparentNav) {
      this.setState({
        navbarColor: "",
        navbarPosition: "",
      });
    } else {
      this.setState({
        navbarColor: "navbar-transparent",
        navbarPosition: "fixed-top",
      });
    }
  }

  updateNavbarColor() {
    if (this.state.isTransparentNav) {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        this.setState({
          navbarColor: "",
        });
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        this.setState({
          navbarColor: "navbar-transparent",
        });
      }
    }
  }

  toggleNavbarCollapse() {
    this.setState({
      setNavbarCollapse: !this.state.navbarCollapse,
    });
    document.documentElement.classList.toggle("nav-open");
  }

  logoutUser = () => {
    this.props.signOut();
    this.props.removeRestaurants();
    this.props.removeDishes();
    this.props.history.push("/");
  };

  render() {
    const { history } = this.props;
    const { navbarColor, navbarPosition, navbarCollapse } = this.state;

    // console.log(this.props.navigation.state.routeName);

    return (
      <Navbar className={classnames(navbarPosition, navbarColor)} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              data-placement="bottom"
              onClick={() => history.push("/")}
              title="Taste it, everywhere, everywhen."
            >
              <span className="navbar-text">Dish delivery</span>
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse,
              })}
              onClick={this.toggleNavbarCollapse.bind(this)}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem>
                <Button
                  className="btn-round header-button"
                  color="neutral"
                  onClick={() => this.props.history.push("restaurants")}
                >
                  Restaurants
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-round header-button"
                  color="neutral"
                  onClick={() => this.props.history.push("list")}
                >
                  Dishes
                </Button>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    color="neutral"
                    className="header-button"
                  >
                    {this.props.user.Email}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Control panel</DropdownItem>
                    <DropdownItem
                      onClick={() => this.props.history.push("user")}
                    >
                      Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.logoutUser}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeRestaurants: () => dispatch(removeRestaurants()),
    removeDishes: () => dispatch(removeDishes()),
    signOut: () => dispatch(signOut()),
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(IndexNavbar));
