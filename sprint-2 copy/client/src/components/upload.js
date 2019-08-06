import React from 'react';
import Navbar from './navbar';
import Thumbnail from '../Assets/Images/Upload-video-preview.jpg';

class Upload extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <NewPhoto />
            </>
        )
    }
}

class NewPhoto extends React.Component {
    render() {
        return (
            <>
                <div className='upload'>
                    <h1>Upload Video</h1>
                    <div className='upload__content'>
                        <div className='upload__video'>
                            <label>VIDEO THUMBNAIL</label>
                            <img src={Thumbnail} alt='' />
                        </div>
                        <div className='upload__input'>
                            <label>TITLE YOUR VIDEO</label>
                            <input className="upload__input--input1" type='text' placeholder='Add a title to your video' />
                            <label>ADD A VIDEO DESCRIPTION</label>
                            <input className="upload__input--input2" type='text' placeholder='Add a description of your video' />
                        </div>
                    </div>

                    <div className='upload__button'>
                        <button className='upload__button--button1'>PUBLISH</button>
                        <button className='upload__button--button2'>CANCEL</button>
                    </div>

                </div>
            </>
        )
    }
}
export default Upload;