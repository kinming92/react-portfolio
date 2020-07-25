import React, {Component} from 'react'
import Card from "./Card"

class Projects extends Component {
    render(){
        return (
            <div className="project-container container-fluid">
                <div className="row">
                    {this.props.projects.map((project, index) => (<div key={index} className="col-lg col-lg-3 m-2"> <Card key={index} project={project} /> </div>))}
                </div> 
            </div>
        )
    }
}
export default Projects