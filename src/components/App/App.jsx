import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import React, { Component, Fragment } from "react";

class App extends Component {
  submit = () => {};

  render() {
    return (
      <Fragment>
        <p>hello</p>
        <Searchbar />
        <ImageGallery />
      </Fragment>
    );
  }
}

export default App;
