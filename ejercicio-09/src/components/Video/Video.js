import React, {Component} from 'react';

import './Video.css';
import video from '../../assets/Registro - 65390.mp4'


export default class Video extends Component {

    render() {
        return (
            <div className="video">
            <video width="640" height="480" alt="Registro" controls>
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
        )
    }
}