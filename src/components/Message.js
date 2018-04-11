import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  background: lightyellow;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

const Names = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: darkgoldenrod;
`;

const Message = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: green;
`;

export default () => (
  <div>
    <Container>
      <Names>Tina &amp; Carlton</Names>
      <Message>Honeymoon Pictures</Message>
    </Container>
  </div>
);
