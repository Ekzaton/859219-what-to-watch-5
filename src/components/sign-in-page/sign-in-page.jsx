import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {login} from "../../store/api-actions";

import {AppRoute, SignIn, REG_EXP_EMAIL, REG_EXP_PASSWORD} from "../../const";
import {extend} from '../../utils';

const SignInPage = (props) => {
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [isValidForm, setIsValidForm] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    email: ``,
    password: ``,
  });
  const {email, password} = inputs;
  const errorClass = ` sign-in__field--error`;

  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setInputs(extend(inputs, {
      [name]: value
    }));

    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    switch (name) {
      case SignIn.EMAIL:
        setIsValidEmail(REG_EXP_EMAIL.test(value));
        break;
      case SignIn.PASSWORD:
        setIsValidPassword(REG_EXP_PASSWORD.test(value));
        break;
    }

    setIsValidForm(isValidEmail && isValidPassword);
  };

  const handleSubmit = (evt) => {
    const {onSubmit} = props;

    evt.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__message">
            {!isValidEmail && <p>Please enter a valid email address</p>}
            {!isValidPassword && <p>Please enter a valid password</p>}
          </div>
          <div className="sign-in__fields">
            <div className={`sign-in__field${!isValidEmail ? errorClass : ``}`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                onChange={handleInputChange}
                autoComplete="false"
                required
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className={`sign-in__field${!isValidPassword ? errorClass : ``}`}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                onChange={handleInputChange}
                autoComplete="false"
                required
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
            <button
              className="sign-in__btn"
              type="submit"
              disabled={!isValidForm}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

SignInPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export {SignInPage};
export default connect(null, mapDispatchToProps)(SignInPage);
