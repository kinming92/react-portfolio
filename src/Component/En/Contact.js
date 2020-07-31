import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Contact extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        const post = {
            subject: e.target.elements.subject.value,
            message: e.target.elements.message.value
        }

        const url = `mailto:kinming.klm@gmail.com?subject=${post.subject}&body=${encodeURIComponent(post.message)}`
        window.location.href = url;
        this.props.history.replace("/react-portfolio");
    }
    
    render(){
        return (
            <div className="contact-box">
                <div className="card" >
                    <div className="card-body">
                        <h3 className="card-title">Contact Me</h3>
                        <p className="card-text">Feel free to leave me a message</p>
                        <form onSubmit={this.handleSubmit}> 
                            {/* <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input className="form-control" id="subject" rows="3" name="subject" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3" name="message"></textarea>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-dark mb-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Contact)