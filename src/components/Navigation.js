import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Routes } from "../utils/routes";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  grid-gap: 10px;
  opacity: 0.5;
  background: lightyellow;
  padding: 10px;
`;
const style = {
  fontFamily: "Arial",
  fontWeight: "bold",
  margin: "5px",
  textDecoration: "none",
  color: "darkgoldenrod"
};
const styleActive = {
  textDecoration: "underline overline",
  color: "green"
};

export default () => (
  <Container>
    <NavLink exact to={Routes.home} style={style} activeStyle={styleActive}>
      Home
    </NavLink>
    {/*
    <NavLink to={Routes.directions} style={style} activeStyle={styleActive}>
      Directions
    </NavLink>
    <NavLink to={Routes.schedule} style={style} activeStyle={styleActive}>
      Schedule
    </NavLink>
    <NavLink to={Routes.seating} style={style} activeStyle={styleActive}>
      Seating
    </NavLink>
    <NavLink to={Routes.cars} style={style} activeStyle={styleActive}>
      Cars
    </NavLink>
    <NavLink to={Routes.support} style={style} activeStyle={styleActive}>
      Support
    </NavLink>
      */}
  </Container>
);
