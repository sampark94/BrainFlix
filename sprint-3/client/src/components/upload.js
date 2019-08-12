import React from 'react';
import Navbar from './navbar';
import Thumbnail from '../Assets/Images/Upload-video-preview.jpg';
import axios from 'axios';

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
    constructor() {
        super()

        this.formRef = React.createRef()
    }

    state = {
        input: '',
        description: ''
    }

    handleClick = () => {

        axios.post('http://localhost:8080/videos', {
            title: this.formRef.current.input.value,
            channel: 'Sam Park',
            description: this.formRef.current.description.value,
            image: `${Thumbnail}`
        })
            .then(function (response) {
                console.log(response);
            })
    }
    updateInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    updateDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    render() {
        return (
            <>
                <form ref={this.formRef}>
                    <div className='upload'>
                        <h1>Upload Video</h1>
                        <div className='upload__content'>
                            <div className='upload__video'>
                                <label>VIDEO THUMBNAIL</label>
                                <img src={Thumbnail} alt='' />
                            </div>
                            <div className='upload__input'>
                                <label>TITLE YOUR VIDEO</label>
                                <input className="upload__input--input1" name='input' type='text' onChange={this.updateInput} placeholder='Add a title to your video' />
                                <label>ADD A VIDEO DESCRIPTION</label>
                                <input className="upload__input--input2" name='description' type='text' onChange={this.updateDescription} placeholder='Add a description of your video' />
                            </div>
                        </div>

                        <div className='upload__button'>
                            <button className='upload__button--button1' onClick={this.handleClick}>PUBLISH</button>
                            <button className='upload__button--button2'>CANCEL</button>
                        </div>

                    </div>
                </form>
            </>
        )
    }
}
export default Upload;