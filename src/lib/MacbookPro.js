import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 50vw;
  background-color: inherit;
`;

const MackbookCase = styled.div`
  height: 50vh;
  width: 50vh;
  margin: auto;
`;

const Screen = styled.div`
  background: #0d0d0d;
  border-radius: 1.5vh;
  box-shadow: inset 0 0 0 2px #c8cacb, inset 0 0 0 2px #767a7d;
  height: 60%;
  margin: 0 auto;
  padding: 29px 19px 39px 19px;
  position: relative;
  width: 96.67%;
`;

const HomeScreen = styled.div`
  background: url("https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2014/03/retina_macbook_pro_rene_dock_screen.jpg?itok=H-M3YjPb");
  background-size: cover;
  height: 100%;
`;

const Bottom = styled.div`
  width: 120.5%;
  height: 2%;
  background: #909496;
  position: relative;
  left: -8%;
  top: -2%;
  border: solid #767a7d;
  border-radius: 2px 2px 0 0;
  border-width: 2px 4px 0 4px;
  position: relative;

  ::after {
    background: #83878a;
    box-shadow: inset 0 0 4px 2px #6a6d70;
    border-radius: 0 0 10px 10px;
    height: 10px;
    left: 50%;
    margin-left: -60px;
    top: -2px;
    width: 120px;
    content: "";
    position: absolute;
  }
`;

const Bottom2 = styled.div`
  background: #a0a3a7;
  border-radius: 0 0 180px 180px/ 0 0 12px 12px;
  box-shadow: inset 0 -2px 6px 0 #474a4d;
  height: 12px;
  left: -8%;
  margin: 0 auto;
  top: -2%;
  content: "";
  width: 122.2%;
  position: relative;
  background: #515456;
  box-shadow: inset 0 -2px 6px 0 black;
`;

class Macbook extends Component {
  render() {
    return (
      <Container>
        <MackbookCase>
          <Screen>
            <HomeScreen />
          </Screen>
          <Bottom />
          <Bottom2 />
        </MackbookCase>
      </Container>
    );
  }
}

export default Macbook;