import React, { Component } from "react";
import axios from "../src/utils/axios";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuthenticated: false,
    errors: null,
    loading: false,
    shared: false,
    logoutState: false
  }

  loginUser = async (formData) => {
    try {
      this.setState(() => {
        return { loading: true };
      });
      const user = await axios.post("/auth/login", formData);
      if (user) {
        window.localStorage.setItem("token", user.data.data.token);
        this.setState(() => {
          return {
            isAuthenticated: true,
            loading: false,
            error: null
          };
        });
      }
    } catch (err) {
      this.setState(() => {
        return {
          error: err.response.data.message,
          loading: false,
        };
      });
    }
  }

  signupUser = async (formData) => {
    try {
      this.setState(() => {
        return { loading: true };
      });
      const user = await axios.post("/auth/signup", formData);
      if (user) {
        await localStorage.setItem("token", user.data.data.token);
        this.setState(() => {
          return {
            isAuthenticated: true,
            loading: false,
            error: null
          };
        });
      }
    } catch (err) {
      this.setState(() => {
        return {
          error: err.response.data.message,
          loading: false,
        };
      });
    }
  }

  shareVideo = async formData => {
    try {
      this.setState(() => {
        return { loading: true, shared: false, error: null };
      });
      const postData = {
                    method: "POST",
                    mode: "cors",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `${localStorage.token}`
                    },
                    body: JSON.stringify(formData)
    }
      const share = await fetch("https://youtube-share-api.herokuapp.com/share", postData);
      if (share) {
        this.setState(() => {
          return { loading: false, shared: true };
        });
      }
    } catch (err) {
      console.log(err.response)
      this.setState(() => {
        return {
          error: err.response.data.message,
          loading: false,
        };
      });
    }
  }

  logout = () => {
    this.setState(() => {
      return { isAuthenticated: false,
        errors: null,
        loading: false,
        logout: true
        };
    });
    localStorage.removeItem('token');
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          loginUser: this.loginUser,
          signupUser: this.signupUser,
          shareVideo: this.shareVideo,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };