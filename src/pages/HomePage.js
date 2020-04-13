import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import axios from "../utils/axios";

const Homepage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
    axios.get("/share").then(result => {
        setVideos(result.data.data)
    })
      }, []);
    return (
        <div>
            <div><NavBar /></div>
            {videos.map((vid, i) => (
            <CardWrapper key={i}><iframe width="460" height="250" title={vid.id} src={`https://www.youtube.com/embed/${vid.youtubeId}`} 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe> <span className="span">Shared by: {vid.owner}</span></CardWrapper>
            ))}
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
}
`;