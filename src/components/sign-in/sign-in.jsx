import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user.js";
import {withRouter} from "react-router-dom";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.emailRef = createRef();
    this.passwordRef = createRef();
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onSuccessLogin = this.onSuccessLogin.bind(this);
    this.onFailLogin = this.onFailLogin.bind(this);
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    const authData = {
      login: this.emailRef.current.value,
      password: this.passwordRef.current.value
    };
    this.props.loginOperation(authData, this.onSuccessLogin, this.onFailLogin);
  }

  onSuccessLogin() {
    this.props.history.push(`/`);
  }

  onFailLogin() {
    throw new Error(`error in auth`);
  }


  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.onSubmitHandler}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={this.emailRef}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref={this.passwordRef}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

const WithRouterSignIn = withRouter(SignIn);

SignIn.propTypes = {
  loginOperation: PropTypes.func.isRequired,
  history: PropTypes.object
};


const mapDispatchToProps = (dispatch) => ({
  loginOperation(authData, OnSuccessLogin, onFailLogin) {
    dispatch(Operation.login(authData, OnSuccessLogin, onFailLogin));
  },
});

export {SignIn};
export default connect(()=> {}, mapDispatchToProps)(WithRouterSignIn);
