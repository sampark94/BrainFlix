import React from 'react'
import Navbar from './navbar'
import VideoSection from './hero'
import Comments from './comments'
import VideoSectionDescription from "./herodescription"
// import axios from 'axios'
// import Upload from "./upload"
// import { Route, Switch } from 'react-router-dom';


import '../styles/main.css'
import thumbnail1 from '../Assets/Images/video-list-1.jpg'
import thumbnail2 from '../Assets/Images/video-list-2.jpg'
import thumbnail3 from '../Assets/Images/video-list-3.jpg'
import thumbnail4 from '../Assets/Images/video-list-4.jpg'
import thumbnail5 from '../Assets/Images/video-list-5.jpg'
import thumbnail6 from '../Assets/Images/video-list-6.jpg'
import thumbnail7 from '../Assets/Images/video-list-7.jpg'
import thumbnail8 from '../Assets/Images/video-list-8.jpg'



class App extends React.Component {
    state = {
        videos: [

            {
                id: '0',
                title: 'Become A Travel Pro In One Easy Lesson',
                author: 'Scotty Cranmer',
                image: <img src={thumbnail1} alt='' />
            },

            {
                id: '1',
                title: 'Les Houches The Hidden Gem Of The Chamonix',
                author: 'Cornelia Blair',
                image: <img src={thumbnail2} alt='' />,
            },

            {
                id: '2',
                title: 'Travel Health Useful Medical Information For',
                author: 'Glen Harper',
                image: <img src={thumbnail3} alt='' />,
            },

            {
                id: '3',
                title: 'Cheap Airline Tickets Great Ways To Save',
                author: 'Emily Harper',
                image: <img src={thumbnail4} alt='' />,
            },

            {
                id: '4',
                title: 'Take A Romantic Break In A Boutique Hotel',
                author: 'Ethan Owen',
                image: <img src={thumbnail5} alt='' />,
            },

            {
                id: '5',
                title: 'Choose The Perfect Accommodations',
                author: 'Lydia Perez',
                image: <img src={thumbnail6} alt='' />,
            },

            {
                id: '6',
                title: 'Cruising Destination Ideas',
                author: 'Timothy Austin',
                image: <img src={thumbnail7} alt='' />,
            },

            {
                id: '7',
                title: 'Train Travel On Track For Safety',
                author: 'Scotty Cranmer',
                image: <img src={thumbnail8} alt='' />,
            },
        ]
    }
    render() {
        return (
            <div>
                <nav><Navbar /></nav>
                <VideoSection />
                <div className="container">
                    <div className="container__comments">
                        <VideoSectionDescription />
                        <Comments />
                    </div>
                    <VideoList videos={this.state.videos} />
                </div>

                {/* <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/upload" component={Upload} />
                </Switch> */}
            </div>
        )
    }
}
function VideoList(props) {
    const VideoList = props.videos.map((video, i) => {
        return <div className='video__container'><div className='video__image'>{video.image}</div>
            <div className='video__info'>
                <li className='video__title'>{video.title}</li>
                <li className='video__author'>{video.author}</li>
            </div>
        </div>;
    });
    return <div className='video'><div className='video__maintitle'>Next Video</div>
        <ul className="video__list">{VideoList}</ul></div>;
}



export default App
