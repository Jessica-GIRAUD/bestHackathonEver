import React from "react";
import styled from "styled-components";
import index from "../img/index.png";
import minautore from "../img/minautore.png";
import TwitHermes from "../img/TwitHermes.png";

const RStype = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4em;
  text-align: center;
  margin: 2em 2em 0 2em;
`;

const Img = styled.img`
  width: 3em;
`;

const Wrap = styled.div`
  width: 100%;
  background: #101010;
  height: 10em;
  margin-bottom: 0;
`;

const ListRS = styled.ul`
  list-style-type: none;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  padding-left: 0;
`;

const RS = () => (
  <>
    <Wrap>
      <ListRS>
        <RStype>
          <Img src={index} alt="InstaGod" />
          <p>InstaGod</p>
        </RStype>
        <RStype>
          <Img src={minautore} alt="Minautore" />
          <p>Face de Minautore</p>
        </RStype>
        <RStype>
          <Img src={TwitHermes} alt="TwitHermes" />
          <p>Twit'Hermes</p>
        </RStype>
      </ListRS>
    </Wrap>
  </>
);

export default RS;
