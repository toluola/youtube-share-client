import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { AuthConsumer } from "../../src/context";
import { ButtonContainer } from "../utils/Button";

const SharePage = () => {
  const [formData, setFormData] = React.useState({
    link: ""
  })
  let shareVideo

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault()
    await shareVideo(formData);
    setFormData({
      "link": ""
    });
  }

  const { link } = formData
  return (
    <div>
      <div><NavBar /></div>
      <ShareWrapper>
        <AuthConsumer>
          {value => {
            const { error, shared, loading } = value;
            shareVideo = value.shareVideo
            return (
              <React.Fragment>
                {loading && (<h3>loading...</h3>)}
                {error}
                {shared && (<h3>Video Shared Successfully</h3>)}
                <div className="form-header">
                  <h2>Enter your video link below</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <ul>
                    <li>
                      <input
                        type="text"
                        id="link"
                        name="link"
                        className="link"
                        onChange={handleInputChange}
                        value={link}
                        autoFocus
                        tabIndex="1"
                      />
                    </li>
                    <li>
                      <ButtonContainer
                        background
                        hover
                        paddingTopBottom="0.8rem"
                        paddingLeftRight="1.9rem"
                        className="button"
                        tabindex="3"
                      >
                        Share
                </ButtonContainer>
                    </li>
                  </ul>
                </form>
              </React.Fragment>
            )
          }}
        </AuthConsumer>
      </ShareWrapper>
    </div>
  );
}

const ShareWrapper = styled.div`
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

export default SharePage;
