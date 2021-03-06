import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import "./Navbar.scss";
import { withRouter } from "react-router-dom";
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

  componentDidMount(prevProps) {
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    this.setNavbarClasses();
    this.props.history.listen(() => {
      this.setNavbarClasses();
    });

    window.addEventListener("scroll", this.updateNavbarColor.bind(this));

    return function cleanup() {
      window.removeEventListener("scroll", this.updateNavbarColor.bind(this));
    };
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

  render() {
    const { onLoginModalToggle, history } = this.props;
    const { navbarColor, navbarPosition, navbarCollapse } = this.state;

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
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter" />
                  <p className="d-lg-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                  <p className="d-lg-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram" />
                  <p className="d-lg-none">Instagram</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://www.github.com/CreativeTimOfficial/paper-kit-react?ref=creativetim"
                  target="_blank"
                  title="Star on GitHub"
                >
                  <i className="fa fa-github" />
                  <p className="d-lg-none">GitHub</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={onLoginModalToggle}>
                  <i className="nc-icon nc-book-bookmark" /> Login
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  onClick={() => history.push("register")}
                >
                  Sign up
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(IndexNavbar);
