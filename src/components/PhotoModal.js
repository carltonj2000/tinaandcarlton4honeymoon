import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  z-index: 9997;
  position: absolute;
  width: calc(100vw - 5px);
  height: calc(100vh - 5px);
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 9999;
  position: absolute;
  top: 5vh;
  left: 5vw;
  width: 85vw;
  height: 85vh;
  background-image: props.img.name,
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border: 5px solid darkgoldenrod;
`;

const Img = styled.img`
  z-index: 9998;
  position: absolute;
  top: 5vh;
  left: 5vw;
  width: 85vw;
  height: 85vh;
  border: 5px solid darkgoldenrod;
`;

export default props => {
  if (!props.show) return null;
  return (
    <Backdrop>
      <Img src={props.img.name} />
      <Modal src={props.img.name}>
        <div className="close">
          <Button onClick={props.onClose}>X</Button>
        </div>
        <div className="next">
          <span>{props.img.description}</span>
          <Button onClick={() => props.nextImg(-1)}>&larr;</Button>
          <Button onClick={() => props.nextImg(1)}>&rarr;</Button>
        </div>
      </Modal>
    </Backdrop>
  );
};
