import React from 'react'
import Icon from '../Assets/Logo/Logo-brainflix.png'
import NavPic from '../Assets/Images/Mohan-muruge.jpg'
import Search from '../Assets/Icons/PNG/Icon-search.png'
import { Link } from 'react-router-dom';



class Navbar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <div className="navbar">
                            <div className="navbar__container--1">
                                <Link to='/'>
                                    <img
                                        src={Icon}
                                        className="navbar__logo"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="navbar__container--2">
                                <input
                                    className="navbar__search"
                                    type="text"
                                    id="search"
                                    name="search"
                                    placeholder="Search"
                                />
                                <div>
                                    <img className="navbar__search--icon" src={Search} alt="" />
                                </div>
                                <button className="navbar__button"><Link to='/upload'>+ UPLOAD</Link></button>
                                <img
                                    src={NavPic}
                                    className="navbar__picture"
                                    alt=""
                                />
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Navbar