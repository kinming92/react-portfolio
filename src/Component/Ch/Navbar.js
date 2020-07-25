import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <ul className="navbar__nav">
                    <li className="nav__item">
                        <Link className="nav-link" to={"/react-portfolio"}>主页</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav-link" to={"/react-portfolio/about"}>关于我</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav-link" to={"/react-portfolio/projects"}>完成项目</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav-link" to={"/react-portfolio/contact"}>联系我</Link>
                    </li>
                </ul>
   
            </div>
        );
    }
}

export default Navbar