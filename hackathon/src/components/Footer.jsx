import React from "react";
import styled from "styled-components";

const Footer1 = styled.div`
  display: flex;
  color: #ffffff;
  width: 100%;
  background-color: #0b0b0b;
`;

const Border = styled.div`
  height: 0.5em;
  width: 100%;
  margin-top: 0;
  background: #FF1493;
  );
  `;

const Liens = styled.div`

  width: 90%;
  display: flex;
  flex-direction:row;
  align-items: end;
  margin:0 auto;
  padding-top: 1em;
  padding-bottom: 1em;
  justify-content: space-around;
  );
`;

const List = styled.ul`
  list-style-type: none;
  text-align: left;
  flex-direction: column;
  width: 11em;
  padding-bottom: 10px;
`;

const Titre = styled.h1`
  text-decoration: underline;
  font-weight: bold;
  text-align: left;
  font-size: 80%;
`;

const Footer = () => (
  <>
    <Border />
    <Footer1>
      <Liens>
        <div>
          <List>
            <li>
              <Titre>
                <h4>ADOPT A GOD</h4>
              </Titre>
            </li>
            <li href="#">Who are we ?</li>
            <li href="#">I like these Gods</li>
            <li href="#">They found love</li>
          </List>
          <List>
            <li>
              <Titre>
                <h3>Personal data</h3>
              </Titre>
            </li>
            <li href="#">(...or not)</li>
            <li href="#">If a god comes to you ...</li>
          </List>
        </div>
        <div>
          <List>
            <li href="#">Instagod</li>
            <li href="#">Face de Minautore</li>
            <li href="#">Twit'Hermes</li>
          </List>
          <List>
            <li href="#">Help number: 069 069</li>
            <li href="#">Have you been harassed?</li>
            <li href="#">Are you an abuser?</li>
          </List>
        </div>
      </Liens>
    </Footer1>
  </>
);

export default Footer;

