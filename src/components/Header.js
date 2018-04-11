import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Message from "./Message";

import { media } from "../utils/styles";

const IMG_9468crop = require("../images/resized/size_405x270/IMG_1240.thumb.jpg");

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${IMG_9468crop});
  height: 400px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  ${media.phone`height: 200px`};
  ${media.tablet`height: 300px`};
`;

export default () => (
  <Container>
    <Navigation />
    <Message />
  </Container>
);
