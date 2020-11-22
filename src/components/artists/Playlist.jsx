import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { getYoutube } from "../../api/youtubeApiCall";

const Main = styled.div`
  margin-top: 10vh;
  height: 110vh;
  background-color: black;
  color: white;
  @media screen and (max-width: 501px) {
    margin-left: 10px;
  }
`;
const Title = styled.h1`
  font-size: 25pt;
  background-color: black;
  @media screen and (max-width: 501px) {
    font-size: 18pt;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 1%;
  background-color: black;
  justify-content: center;
  @media screen and (max-width: 501px) {
    flex-direction: column-reverse;
  }
`;

const ListBloc = styled.div`
  width: 40%;
  height: 400px;
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1%;
  background-color: black;
  @media screen and (max-width: 501px) {
    width: 90%;
    margin-top: 10vh;
    height: 100vh;
  }
`;

const P = styled.p`
  background-color: black;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 2%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  :hover {
    background-color: #1e1e20;
    ${P} {
      background-color: #1e1e20;
    }
  }
`;

const Thumbnail = styled.img`
  width: 7%;
  margin: 10px;
  @media screen and (max-width: 501px) {
  }
`;

const Img = styled.img`
  width: 40%;
  @media screen and (max-width: 501px) {
    width: 80%;
  }
`;

const Playlist = () => {
  let location = useLocation();

  const [play, setPlay] = useState([]);
  const [pic, setPic] = useState(false);

  const getPlay = async value => {
    const myData = await getYoutube(value);
    setPlay(myData.items);
  };

  const handlePic = id => {
    const url = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    setPic(url);
    console.log(pic);
  };

  useEffect(() => {
    getPlay(location.state.item.snippet.channelTitle);
  }, []);

  return (
    <Main>
      <Title>Playlist {location.state.item.snippet.channelTitle}</Title>
      <Container>
        <ListBloc>
          {play.map(item => (
            <List
              onClick={() => handlePic(item.id.videoId)}
              key={item.snippet.title}
            >
              <Thumbnail src={item.snippet.thumbnails.default.url} />

              <P>{item.snippet.title}</P>
            </List>
          ))}
        </ListBloc>
        {/*
        {pic ? (
          <Img src={pic} />
        ) : (
          <Img
            src={`https://i.ytimg.com/vi/${play[0].id.videoId}/hqdefault.jpg`}
          />
        )}
        */}
        {pic && <Img src={pic} />}
      </Container>
    </Main>
  );
};
export default Playlist;
