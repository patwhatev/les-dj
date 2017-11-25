import React, { Component } from 'react';
import VideoParts from './VideoParts';

class Playlist extends Component {
  constructor() {
  	super();

  	this.list = [];
  }
  getSongs() {
  	let PartList = new VideoParts();
  	for(var i=0; i<25; i++) {
  		let index = Math.floor(Math.random()*PartList.parts.length);
  		let video = PartList.parts[index];
  		let title = video[0];
  		let partIndex = Math.floor(Math.random()*video.length);
  		let partInfo = video[1][partIndex];
  		let part = partInfo[0], artist = partInfo[1], track = partInfo[2];

  		let trackInfo = <ul>
  			<li>Artist: {artist}</li>
  			<li>Track: {track}</li>
  		</ul>

  		let videoInfo = <ul>
  			<li>{title}</li>
  			<li>{part}</li>
  		</ul>

  		this.list.push(videoInfo, trackInfo);
  	}

  	return this.list;
  }
  render() {
    return (
      <div className="Playlist">
        <p>This is my Playlist</p>
        <div>{this.getSongs()}</div>
      </div>
    );
  }
}

export default Playlist;
