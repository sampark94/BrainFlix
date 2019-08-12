import React from 'react';
import IconLikes from '../Assets/Icons/PNG/Icon-likes.png';
import IconViews from '../Assets/Icons/PNG/Icon-views.png';

class VideoSectionDescription extends React.Component {
    render() {
        const { HeroObject } = this.props
        const date = new Date(HeroObject.timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateTime = month + "/" + day + "/" + year;
        return (
            <div className="video-section__description">
                <div className="video-section__title">
                    <h2>{HeroObject.title}</h2>
                </div>
                <div className="video-section__stats">
                    <div className="video-section__stats--1">
                        <ul>
                            <li className="video-section__uploader">
                                By {HeroObject.channel}
                            </li>
                            <li className="video-section__date">
                                {dateTime}
                            </li>
                        </ul>
                    </div>
                    <div className="video-section__stats--2">
                        <ul>
                            <li className="video-section__views">
                                <img src={IconViews} alt=''></img>
                                {HeroObject.views}
                            </li>
                            <li className="video-section__likes">
                                <img src={IconLikes} alt=''></img>
                                {HeroObject.likes}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="video-section__text">
                    <p>
                        {HeroObject.description}
                    </p>

                </div>
            </div>
        );
    }
}
export default VideoSectionDescription;