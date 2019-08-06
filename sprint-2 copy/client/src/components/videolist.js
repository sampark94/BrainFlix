import React from 'react';
import { Link } from "react-router-dom";

class SideVideos extends React.Component {
    render() {
        const { VideoList } = this.props
        return (
            <>
                <div className='video'>
                    <div className='video__maintitle'>NEXT VIDEOS</div>
                    <ul className="video__list">{
                        VideoList.map(video => (
                            <Link to={`/${video.id}`}>
                                <div className="video__container">
                                    <div className='video__image'>
                                        <img src={video.image} alt='' />
                                    </div>
                                    <div className='video__info'>
                                        <li className="video__title">{video.title}</li>
                                        <li className="video__author">{video.channel}</li>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }</ul>
                </div>
            </>
        )
    }
}

export default SideVideos;