import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { ButtonContainer } from "../utils/Button";
import { AuthConsumer } from "../../src/context";

const NavBar = () => {
  return (
    <NavWrapper>
      <AuthConsumer>
        {value => {
          const { isAuthenticated, logout, logoutState } = value;
          return (
            <React.Fragment>
              {logoutState && (<Redirect to="/" />)}
              <div className="nav-title">
                <Link to="/" className="nav-header">
                  <h2>YoutubeShare</h2>
                </Link>
              </div>
              <div className="nav-button">
                {isAuthenticated ? <div className="nav-button">
                  <Link to="/share">
                    <ButtonContainer paddingTopBottom="0.8rem" paddingLeftRight="1.9rem">
                      Share

          </ButtonContainer>
                  </Link>
                  <Link to="/">
                    <ButtonContainer
                      background
                      hover
                      paddingTopBottom="0.8rem"
                      paddingLeftRight="1.9rem"
                      onClick={logout}
                    >
                      Logout
          </ButtonContainer>
                  </Link>
                </div> :
                  <div className="nav-button">
                    <Link to="/Login">
                      <ButtonContainer paddingTopBottom="0.8rem" paddingLeftRight="1.9rem">
                        Login

          </ButtonContainer>
                    </Link>
                    <Link to="/signup">
                      <ButtonContainer
                        background
                        hover
                        paddingTopBottom="0.8rem"
                        paddingLeftRight="1.9rem"
                      >
                        Signup
          </ButtonContainer>
                    </Link>
                  </div>}

              </div>
              <hr />
            </React.Fragment>
          )
        }}
      </AuthConsumer>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  background: var(--mainWhite);
  z-index: 100;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 6rem;
  border-bottom: 1px solid #dcdce4;
  .nav-title {
    flex-grow: 1;
    font-style: italic;
    text-align: center;
    color: var(--mainPrimary);
  }
  .nav-header {
    text-decoration: none;
    color: #383f50;
  }
  .icon {
    display: none;
    width: 2em;
    font-size: 2em;
  }
  .nav-button {
    flex-grow: 1;
    text-align: center;
  }
  @media (max-width: 850px) {
    .nav-button {
      display: none;
    }
    .icon {
      display: block;
    }
    .nav-title {
      text-align: left;
      margin-left: 1.7em;
    }
  }
`;

export default NavBar;