import React, { Component } from "react";

const UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authentiated: false,
    };
  }

  setAuthentiated = () => {
    this.setState({ authentiated: true });
  };
  setUnauthenticated = () => {
    this.setState({ authentiated: false });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          setAuthentiated: this.setAuthentiated,
          setUnauthenticated: this.setUnauthenticated,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
