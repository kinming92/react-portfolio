import React, { Component } from "react"
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.swithchLangHandler = this.swithchLangHandler.bind(this)
    }

    swithchLangHandler(e){
        const lang = e.target.firstChild.data
        this.props.onLanguageClicked(lang)
        // console.log(lang)
        // console.log(e.target.dataset.id)
        // console.log(e.currentTarget.dataset.id)
    }
    render(){
        return (
            <div className="sidebar">
                    <nav className="lang"> 
                        <ul className="lang__nav">
                            <li className="lang__item" key={0} data-id={0} onClick={this.swithchLangHandler}>en</li>
                            <li className="lang__item" key={1} data-id={1} onClick={this.swithchLangHandler}>ch</li>
                        </ul>
                    </nav>

                    <nav className="social-media-icon">
                        <ul className="social-media-icon__nav">
                            <li className="social-media-icon__item">
                                <Link to={"/github"}>
                                    <i className="fab fa-github" aria-hidden="true"></i>
                                </Link>
                            </li>
                            <li className="social-media-icon__item">
                                <Link to="/linkedin">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                   
            </div>
        )
    }
}

export default Sidebar