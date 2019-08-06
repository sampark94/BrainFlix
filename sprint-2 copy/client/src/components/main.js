import React from 'react'
import Navbar from './navbar'
import VideoSection from './hero'
import Comments from './comments'
import VideoSectionDescription from "./herodescription"
import SideVideos from "./videolist"
import axios from 'axios'



import '../styles/main.css'



class Main extends React.Component {
    apiKey = '821ec83b-6c7c-4a2a-bdfd-0485c9721996';

    state = {
        isLoading: true,
        videos: [],
        heroVideo: {}
    }

    componentDidUpdate() {
        const { match } = this.props;
        const videoId = match.params.id;

        let video = {};

        axios.get('https://project-2-api.herokuapp.com/videos/' + videoId + '?api_key=' + this.apiKey)
            .then(response => {
                video = response.data;

                this.setState({
                    heroVideo: video
                });
            })
    }
    componentDidMount() {


        let videos = [];
        let video = {};

        axios.get('https://project-2-api.herokuapp.com/videos?api_key=' + this.apiKey)
            .then(response => {
                videos = response.data;
                video = videos[0];

                axios.get('https://project-2-api.herokuapp.com/videos/' + video["id"] + '?api_key=' + this.apiKey)
                    .then(response => {
                        video = response.data;

                        this.setState({
                            isLoading: false,
                            videos: videos,
                            heroVideo: video
                        });
                    })


            })

    }

    render() {
        const { isLoading, heroVideo, videos } = this.state

        const sideVideos = videos.filter(video => video.id !== heroVideo.id);
        return (
            isLoading ? (<div>Loading...</div>) : (
                <div>
                    <nav><Navbar /></nav>
                    <VideoSection HeroImage={heroVideo} />
                    <div className="container">
                        <div className="container__comments">
                            <VideoSectionDescription HeroObject={heroVideo} />
                            <Comments HeroComments={heroVideo} />
                        </div>
                        <SideVideos VideoList={sideVideos} />
                    </div>


                </div>
            ))
    }
}

export default Main
