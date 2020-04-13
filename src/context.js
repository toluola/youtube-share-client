import React, { Component } from "react";
import axios from "../src/utils/axios"

const AuthContext = React.createContext();

class AuthProvider extends Component {
    state = {
        isAuthenticated: false,
        errors: null,
        loading: false
    }

    loginUser = async formData => {
        try {
            this.setState(() => {
                return { loading: true };
              });
            const user = await axios.post("/auth/login", formData);
            if (user) {
                console.log(user);
                localStorage.setItem("token", user.data.data.token);
                this.setState(() => {
                    return { isAuthenticated: true,
                             loading: false };
                  });
            }
        } catch(err) {console.log(err)}
    }

    render() {
        return (
            <AuthContext.Provider
              value={{
                ...this.state,
                loginUser: this.loginUser 
              }}
            >
              {this.props.children}
            </AuthContext.Provider>
          );
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };