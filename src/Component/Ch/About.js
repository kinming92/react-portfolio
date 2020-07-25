import React, { Component } from "react";

class About extends Component{
    render(){
        return (
            <div className="about-box container border">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <img src="/react-portfolio/image/apartments-architecture-balcony-black-and-white.jpg" alt="..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <img src="/react-portfolio/image/a-pexels.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg">
                        <div>
                            <b>关于我</b><hr />
                            <p>大家好，我叫健铭。兴趣爱好是打羽球，绘画，还有阅读。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About