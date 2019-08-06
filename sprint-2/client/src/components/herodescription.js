import React from 'react';
import IconLikes from '../Assets/Icons/PNG/Icon-likes.png';
import IconViews from '../Assets/Icons/PNG/Icon-views.png';

class VideoSectionDescription extends React.Component {
    render() {
        return (
            <div className="video-section__description">
                <div className="video-section__title">
                    <h2>BMX Rampage: 2018 Highlights</h2>
                </div>
                <div className="video-section__stats">
                    <div className="video-section__stats--1">
                        <ul>
                            <li className="video-section__uploader">
                                By Red Cow
              </li>
                            <li className="video-section__date">
                                12/18/2018
              </li>
                        </ul>
                    </div>
                    <div className="video-section__stats--2">
                        <ul>
                            <li className="video-section__views">
                                <img src={IconViews} alt=''></img>
                                1,001,023
              </li>
                            <li className="video-section__likes">
                                <img src={IconLikes} alt=''></img>
                                110,985
              </li>
                        </ul>
                    </div>
                </div>
                <div className="video-section__text">
                    <p>
                        On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
          </p>

                </div>
            </div>
        );
    }
}
export default VideoSectionDescription;