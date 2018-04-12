import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: aqua;
  color: black;
  opacity: 0.5;
  margin-top: 15px;
`;

export default () => (
  <Container>
    <p>Copyright &copy; Carlton &amp; Tina Joseph</p>
  </Container>
);
