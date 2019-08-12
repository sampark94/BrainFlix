import React from 'react'
import Navbar from './navbar'
import VideoSection from './hero'
import Comments from './comments'
import VideoSectionDescription from "./herodescription"
import SideVideos from "./videolist"
import axios from 'axios'



import '../styles/main.css'



class Main extends React.Component {

    state = {
        isLoading: true,
        videos: [],
        heroVideo: {}
    }

    componentDidMount() {


        let videos = [];
        let video = {};

        axios.get('http://localhost:8080/videos')
            .then(response => {
                videos = response.data;
                video = videos[0];

                axios.get('http://localhost:8080/videos/' + video["id"])
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
    componentDidUpdate() {
        const { match } = this.props;
        const videoId = match.params.id;

        if (videoId !== undefined) {
            let video = {};

            axios.get('http://localhost:8080/videos/' + videoId)
                .then(response => {
                    video = response.data;

                    this.setState({
                        heroVideo: video
                    });
                })
        }
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
