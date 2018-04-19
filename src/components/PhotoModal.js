import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  z-index: 9997;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const Button = styled.button`
  padding: 20px;
  margin: 10px 10px;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;

const Description = styled.div`
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  background: rgba(200, 200, 200, 0.8);
`;

export default props => {
  if (!props.show) return null;
  return (
    <Backdrop>
      <Modal
        style={{
          backgroundImage: `url(${props.img.name})`
        }}
      >
        <div className="close">
          <Button onClick={props.onClose}>X</Button>
          <Button onClick={props.toggleHd} title="select HD/SD images">
            {props.hd ? <span>HD</span> : <span>SD</span>}
          </Button>
        </div>
        <Description>{props.img.description}</Description>
        <div className="next">
          <Button onClick={() => props.nextImg(-1)}>&larr;</Button>
          <Button onClick={() => props.nextImg(1)}>&rarr;</Button>
        </div>
      </Modal>
    </Backdrop>
  );
};
