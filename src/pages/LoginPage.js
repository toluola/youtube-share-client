import React from "react";
import styled from "styled-components";
import { AuthConsumer } from "../../src/context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../utils/Button";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <AuthConsumer>
        {value => {
          return (
            <React.Fragment>
              <div className="form-header">
                <Link to="/" className="title">
                  <h2>YoutubeShare</h2>
                </Link>
                <h4>Login to YoutubeShare</h4>
                <p>
                  New to YoutubeShare?{" "}
                  <Link to="/signup" className="signup-link">
                    Signup now
          </Link>
                </p>
              </div>
              <form>
                <ul>
                  <li>
                    <label for="userrname">username</label>
                    <input
                      type="text"
                      id="email"
                      name="username"
                      className="username"
                      autofocus
                      tabindex="1"
                    />
                  </li>
                  <li>
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="password"
                      autocomplete="off"
                      id="password"
                      tabindex="2"
                    />
                  </li>
                  <li>
                    <ButtonContainer
                      background
                      hover
                      paddingTopBottom="0.8rem"
                      paddingLeftRight="1.9rem"
                      className="button"
                      tabindex="4"
                    >
                      Login
            </ButtonContainer>
                  </li>
                </ul>
              </form>
            </React.Fragment>
          )
        }}
      </AuthConsumer>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  text-align: center;
  background: #f4f5f9;
  height: 100%;
  box-sizing: border-box;
  max-width: 475px;
  margin: 100px auto 0;
  min-width: unset;
  border: 1px solid #dee1e8;
  box-shadow: 0 0 40px 0 rgba(131, 140, 159, 0.25);
  border-radius: 3px;
  padding: 40px;
  ul {
    list-style: none;
  }
  input {
    width: 100%;
    height: 40px;
    display: block;
    box-sizing: border-box;
    color: #515151;
    border-radius: 3px;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    padding: 0 10px;
    background: #fff;
    border: 1px solid #dee1e8;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  label {
    cursor: pointer;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 20px;
    color: #383f50;
    box-sizing: border-box;
  }
  li {
    margin-top: 20px;
  }
  form {
    text-align: left;
  }
  .form-header {
    border-bottom: 1px solid #dee1e8;
    padding-bottom: 20px;
    margin-bottom: 40px;
  }
  .signup-link {
    color: #39bce5;
  }
  .title {
    text-decoration: none;
    color: #383f50;
  }
`;

export default LoginPage;