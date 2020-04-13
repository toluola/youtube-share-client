import React, { Component } from "react";
import axios from "../src/utils/axios";

const AuthContext = React.createContext();

class AuthProvider extends Component {
    state = {
        isAuthenticated: false,
        errors: null,
        loading: false
    }

    loginUser = async (formData, history) => {
        try {
            this.setState(() => {
                return { loading: true };
              });
            const user = await axios.post("/auth/login", formData);
            if (user) {
                localStorage.setItem("token", user.data.data.token);
                this.setState(() => {
                    return { isAuthenticated: true,
                             loading: false };
                  });
                  history.push('/');
            }
        } catch(err) {console.log(err)}
    }

    signupUser = async (formData, history) => {
        try {
            this.setState(() => {
                return { loading: true };
              });
            const user = await axios.post("/auth/signup", formData);
            if (user) {
                localStorage.setItem("token", user.data.data.token);
                this.setState(() => {
                    return { isAuthenticated: true,
                             loading: false };
                  });
                  history.push('/');
            }
        } catch(err) {console.log(err)}
    }  

    render() {
        return (
            <AuthContext.Provider
              value={{
                ...this.state,
                loginUser: this.loginUser,
                signupUser: this.signupUser 
              }}
            >
              {this.props.children}
            </AuthContext.Provider>
          );
    }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };