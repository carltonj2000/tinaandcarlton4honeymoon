import React, { Component } from "react";
import styled from "styled-components";

import Photos from "./Photos.js";
import PhotoModal from "./PhotoModal.js";

import {
  images_81x54,
  //  images_405x270,
  images_1620x1080
} from "../utils/images";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class Home extends Component {
  state = { isOpen: false, img: "", imgIdx: -1, imagesSmall: [], images: [] };
  openModal = idx => {
    window.scrollTo(0, 0);
    return this.setState(state => ({
      isOpen: true,
      img: state.images[idx],
      imgIdx: idx
    }));
  };
  closeModal = () => this.setState({ isOpen: false });
  nextImg = by =>
    this.setState(state => {
      let imgIdx = (state.imgIdx + by) % state.images.length;
      if (imgIdx < 0) imgIdx = state.images.length - 1;
      return { img: state.images[imgIdx], imgIdx: imgIdx };
    });
  componentWillMount() {
    const group = this.props.match.url.split("/").slice(-1)[0];
    this.setState({
      imagesSmall: images_81x54.filter(image => image.groups.includes(group)),
      images: images_1620x1080.filter(image => image.groups.includes(group))
    });
  }
  render() {
    return (
      <Container>
        <PhotoModal
          show={this.state.isOpen}
          onClose={this.closeModal}
          img={this.state.img}
          nextImg={this.nextImg}
        />
        <Photos
          images={this.state.imagesSmall}
          photoModalOpen={this.openModal}
        />
      </Container>
    );
  }
}

export default Home;
