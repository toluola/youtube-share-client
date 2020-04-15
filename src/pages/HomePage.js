import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import axios from "../utils/axios";
import { AuthConsumer } from "../../src/context";

const Homepage = props => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("/share").then(result => {
      setVideos(result.data.data)
    })
  }, []);
  return (
    <div>
      <AuthConsumer>
        {value => {
          return (
            <React.Fragment>
              const { user } = value
              <div><NavBar /></div>
              {
                videos.map((vid, i) => (
                  <CardWrapper key={i}><iframe width="460" height="250" title={vid.id} src={`https://www.youtube.com/embed/${vid.link}`}
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe> <span className="span">Shared by: {user}</span></CardWrapper>
                ))
              }
            </React.Fragment>
          )
        }}
      </AuthConsumer>
    </div>

  )
}

export default Homepage

const CardWrapper = styled.div`
margin: 50px 150px;

span {
    margin-left: 20px;
    font-weight: bold;
}
`;