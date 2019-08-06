import React from 'react';


class VideoSection extends React.Component {
    render() {
        const HeroImage = this.props
        return (
            <>
                <div className="video-section">
                    <div className="video-section__video">
                        <video width='100%' controls poster="{HeroImage}.image" className='hero__image'>
                        </video>
                    </div>
                </div>
            </>
        );
    }
}

export default VideoSection;