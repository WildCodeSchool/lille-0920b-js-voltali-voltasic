import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { getYoutube } from "../../api/youtubeApiCall";

const Main = styled.div`
  margin-top: 10vh;
  height: 90vh;
  background-color: black;
  color: white;
  @media screen and (max-width: 501px) {
    height: 110vh;
    margin-left: 10px;
  }
`;
const Title = styled.h1`
  padding: 2%;
  font-size: 25pt;
  background-color: black;
  @media screen and (max-width: 501px) {
    font-size: 18pt;
  }
`;

const Container = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 601px) {
    flex-direction: column-reverse;
  }
`;

const ListBloc = styled.div`
  width: 40%;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  padding: 1%;
  background-color: black;
  height: 450px;
  overflow-y: scroll;
  scrollbar-color: black black; //firefox
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    //chrome
    background-color: black;
  }
  @media screen and (max-width: 601px) {
    width: 90%;
  }
`;

const P = styled.p`
  background-color: black;
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  padding: 2%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
  height: 10%;
  @media screen and (max-width: 601px) {
    width: 80%;
  }
`;

const Playlist = ({ changeVideo }) => {
  let location = useLocation();

  const [play, setPlay] = useState([]);
  const [pic, setPic] = useState(false);

  const getPlay = async value => {
    const myData = await getYoutube(value);
    setPlay(myData.items);
  };

  const handlePic = (id, item) => {
    const url = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    setPic(url);
    console.log(pic);
    changeVideo(item);
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
              onClick={() => handlePic(item.id.videoId, item)}
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