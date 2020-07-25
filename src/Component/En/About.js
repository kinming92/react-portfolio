import React, { Component } from "react";

class About extends Component{
    render(){
        return (
            <div className="about-box container border">
                <div className="row">
                    <div className="col-lg-4">
                       <img src="/react-portfolio/image/walking-pose.jpg" alt="..." />
                        {/* <div className="row">
                            <div className="col-md">
                                <img src="/react-portfolio/image/walking-pose.jpg" alt="..." />
                            </div>
                        </div> */}
                    </div>
                    <div className="col-12 col-lg">
                        <div>
                            <b>About</b><hr />
                            <p>Hello, my name is Kin. I am a graduate from University of California, San Diego majored in Computer Engineering. I am interested in learning new technology and building software application. I like to explore different technologies which involves software and hardware. My hobbies are playing badminton, reading books, and DRAWING.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About