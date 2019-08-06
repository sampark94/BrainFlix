import React from 'react';
import Logo1 from '../Assets/Images/Mohan-muruge.jpg';
import Logo2 from '../Assets/Images/Mohan-muruge.jpg';

class Comments extends React.Component {
    convertToDate(timestamp) {
        const date = new Date(timestamp)
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateTime = month + "/" + day + "/" + year;
        return dateTime;
    }
    render() {
        const { HeroComments } = this.props
        const heroComments = HeroComments.comments;
        return (

            <div className='comments'>
                <div className='comments__header'>
                    <h2>{heroComments.length} Comments</h2>
                </div>

                <div className='comments__user'>
                    <div className='comments__user__new'>
                        <img src={Logo1} className='comments__user__new--logo' alt='Mohan Muruge' />
                        {/* <div > */}
                        <div className='comments__user__new--info'>
                            <div className='comments__user__new--label'>JOIN THE CONVERSATION</div>
                            <div className='comments__user__new--inputbutton'>
                                <input type='textarea' className='comments__user__new--input' placeholder='Write comments here' />
                                <button className='comments__user__new--button'>COMMENT</button>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className='comments__old'>

                    {heroComments.map(comment =>
                        <div className='comments__old--block' key={comment.id}>
                            <img src={Logo2} className='comments__old--logo' alt='old user' />
                            <div className='comments__old__profile'>
                                <div className="comments__old__profile--nd">
                                    <div className="comments__old__profile--name">{comment.name}</div>
                                    <div className="comments__old__profile--date">{this.convertToDate(comment.timestamp)}</div>
                                </div>
                                <p className="comments__old__profile--comment">{comment.comment}
                                </p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        )
    }
}
export default Comments;