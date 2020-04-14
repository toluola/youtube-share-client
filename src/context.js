import React, { Component } from "react";
import axios from "../src/utils/axios";

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuthenticated: false,
    errors: null,
    loading: false,
    shared: false
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
          return {
            isAuthenticated: true,
            loading: false
          };
        });
        this.setState(() => {
          return { loading: false };
        });
        history.push('/');
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

  signupUser = async (formData, history) => {
    try {
      this.setState(() => {
        return { loading: true };
      });
      const user = await axios.post("/auth/signup", formData);
      if (user) {
        localStorage.setItem("token", user.data.data.token);
        this.setState(() => {
          return {
            isAuthenticated: true,
            loading: false
          };
        });
        this.setState(() => {
          return { loading: false };
        });
        history.push('/');
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
        return { loading: true };
      });
      const share = await axios.post("/share", formData);
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
        loading: false
        };
    });
    localStorage.removeItem('token');
    window.location = "http://localhost:3001/";
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