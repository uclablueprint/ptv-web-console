import React, { Component } from "react";
import PropTypes from "prop-types";
import Firebase, { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    const { passwordOne } = this.state;
    const { firebase } = this.props;
    firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(INITIAL_STATE);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

PasswordChangeForm.propTypes = {
  firebase: PropTypes.instanceOf(Firebase).isRequired
};

export default withFirebase(PasswordChangeForm);
