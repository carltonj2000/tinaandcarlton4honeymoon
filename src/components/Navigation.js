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
    <NavLink to={Routes.melbourne} style={style} activeStyle={styleActive}>
      Melbourne
    </NavLink>
    <NavLink to={Routes.sydney} style={style} activeStyle={styleActive}>
      Sydney
    </NavLink>
    <NavLink to={Routes.macquarie} style={style} activeStyle={styleActive}>
      Port Macquarie
    </NavLink>
    <NavLink to={Routes.brisbane} style={style} activeStyle={styleActive}>
      Brisbane
    </NavLink>
    <NavLink to={Routes.cairns} style={style} activeStyle={styleActive}>
      Cairns
    </NavLink>
  </Container>
);
