import React from 'react';
import MainVideo from '../Assets/Video/BrainStation Sample Video.mp4';
import Poster from '../Assets/Images/video-list-0.jpg';

class VideoSection extends React.Component {
    render() {
        return (
            <>
                <div className="video-section">
                    <div className="video-section__video">
                        <VideoSectionVideo />
                    </div>
                </div>
            </>
        );
    }
}
class VideoSectionVideo extends React.Component {
    render() {
        return (
            <>
                <video
                    width="100%"
                    poster={Poster}
                    src={MainVideo}
                    type="video/mp4">
                </video>
            </>
        )
    }
}

export default VideoSection;