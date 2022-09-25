import React, { Component } from 'react';
import './Audio.css';

import audio from '../../assets/movie-trailer-soundtrack-27143.mp3';

export default class Audio extends Component {

    render(){

        return (
            <div className="audio">
            <audio controls>
                <source src={audio} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
            </div>
        )
    }
}