import React, { Component } from 'react';

class Deck extends Component {
  createPlayer() {
    let markdown = [];
    let placeholder = <div id="video-placeholder"></div>;
    let scriptTag = <script src="https://www.youtube.com/iframe_api"></script>;
    markdown.push(placeholder, scriptTag);

    return markdown;
  }

  render() {
    return (
      <div className="Deck" title="this.props.title">
        <p>{this.props.title}</p>
        <iframe src="https://www.youtube.com/embed/GC8bw4Y8Qpw" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Deck;
