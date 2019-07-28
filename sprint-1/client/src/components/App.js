import React, { Component } from 'react'
import Navbar from './navbar'
import VideoSection from './hero'

import '../styles/main.css'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <VideoSection />
            </div>
        )
    }
}

export default App
