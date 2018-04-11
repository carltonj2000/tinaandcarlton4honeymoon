import React, { Component } from "react";
import styled from "styled-components";

import Photos from "./Photos.js";
import PhotoModal from "./PhotoModal.js";

import {
  images_81x54,
  images_405x270,
  images_1620x1080
} from "../utils/images";
const images = images_81x54;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class Home extends Component {
  state = { isOpen: false, img: "", imgIdx: -1 };
  openModal = idx => {
    window.scrollTo(0, 0);
    return this.setState({
      isOpen: true,
      img: images_1620x1080[idx],
      imgIdx: idx
    });
  };
  closeModal = () => this.setState({ isOpen: false });
  nextImg = by =>
    this.setState(state => {
      let imgIdx = (state.imgIdx + by) % images.length;
      if (imgIdx < 0) imgIdx = images.length - 1;
      return { img: images_1620x1080[imgIdx], imgIdx: imgIdx };
    });
  render() {
    console.log("home", images);
    return (
      <Container>
        <PhotoModal
          show={this.state.isOpen}
          onClose={this.closeModal}
          img={this.state.img}
          nextImg={this.nextImg}
        />
        <Photos images={images} photoModalOpen={this.openModal} />
      </Container>
    );
  }
}

export default Home;
