import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import MediaQuery from 'react-responsive'

import Sidebar from './En/Sidebar'

import PageNotFoundEn from './En/PageNotFound'
import NavbarEn from './En/Navbar'
import HomeEn from './En/Home'
import AboutEn from './En/About'
import ContactEn from './En/Contact'
import ProjectsEn from './En/Projects'

import PageNotFoundCh from './Ch/PageNotFound'
import NavbarCh from './Ch/Navbar'
import HomeCh from './Ch/Home'
import AboutCh from './Ch/About'
import ContactCh from './Ch/Contact'
import ProjectsCh from './Ch/Projects'


class App extends Component {
  constructor(){
    super()
    this.state = {
      lang: 'en',
      projects: [{
        id: 0,
        image: "/image/movie-collection-backend.png",
        title: "Movie Collection Website Backend Rest API",
        description: `A node.js RESTful app is to serve as endpoint for the simple movie collection website. 
                      Technologies and tools used include Node.js, Express.js, MongoDB, Mongoose, JavaScript ECMAScript 6, JsonWebToken.`,
        doc: "https://github.com/kinming92/movie-website-rest-api",
        demo: ""
      },
      {
        id: 1,
        image: "/image/movie-collection-frontend.png",
        title: "Movie Collection Website Frontend",
        description: "A simple website that allows user to create, read, update and delete movie listing. I have worked on retrieving the user’s data from database using Asynchronous JavaScript and XML (AJAX). I implemented a simple responsive page for user login, signup and information update. Technologies and tools used include HTML5, CSS, JavaScript, AJAX, and GIT.",
        doc: "https://github.com/kinming92/movie-collection-website",
        demo: "https://movie-collection-frontend.web.app/"
      },
      {
        id: 2,
        image: "/image/machine-learning-art.png",
        title: "Contour Transformation Machine Learning Art Project",
        description: "I explored the Pix2pix and the Holistically-Nested Edge(HED) machine learning model. Technologies and Tools used include Python3, Jupter Notebook, Pix2pix model, and Holistically-Nested Edge(HED) model.",
        doc: "https://github.com/ucsd-ml-arts/ml-art-final2-amcda-anymlcandoart",
        demo: ""
      },
      {
        id: 3,
        image: "/image/9-bit-ISA.png",
        title: "9 Bit Instruction Architeture Set",
        description: "The goal of this project was to build a hardware stimulation to solve simple Math problems which include multiplication and long division. We designed a new set of assembly set using the accumulator method that handles the 9 bit instruction. We designed the datapath and the control logic of the hardware with SystemVerilog module. SystemVerilog Modules were then implemented based on the diagram above. Each module was unit-tested individually to ensure that we got the correct output. Quartus was used to generate the schematic.",
        doc: "https://github.com/kinming92/Divvy_FinalProject",
        demo: ""
      },
      {
        id: 4,
        image: "/image/Simplified-MIPS-Processor-Architecture.png",
        title: "MISP Processor with Coprocessor 1 project ",
        description: "I assisted in building a single clock cycle MIPS processor and Coprocessor 1, Floating Point Unit. I tested the output correctness with SystemVerilog testbench using Vivado.",
        doc: "https://github.com/kinming92/MISP-FPU-Processor",
        demo: ""
      },
      {
        id: 5,
        image: "/image/door-prototype.png",
        title: "Double Security Door and Latch",
        description: "Our goal of this project was to create a prototype that uses RFID technology to unlock the door. Face tracking was experimented using matlab libraries. I worked on the door frame, latch, and hinge using the AutoCAD SolidWork.",
        doc: "https://kinming92.github.io/assets/doubleSecurity/FinalReport.pdf",
        demo: ""
      }]
    }
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this)
   
  }

  handleLanguageSwitch(lang){
    this.setState({lang: lang})
  }
  render(){
    const { lang, projects } = this.state;

    let project
    if(lang === 'en'){
      project = <ProjectsEn projects={projects}/>
    }else{
      project = <ProjectsCh projects={projects}/>
    }
  
    return (
      <div className="app">
          <div className="flex-grid" >

            <MediaQuery minDeviceWidth={350}>
              <Sidebar onLanguageClicked={this.handleLanguageSwitch}/>
            </MediaQuery>
            
            <div className="main-content">
              { lang === 'en' ? <NavbarEn /> : <NavbarCh />}
              
              <Switch>
              <Route exact path='/react-portfolio' component={ lang === 'en' ? HomeEn : HomeCh } />
              <Route path='/react-portfolio/contact' component={ lang === 'en' ? ContactEn : ContactCh } />
              <Route path='/react-portfolio/about' component={ lang === 'en' ? AboutEn : AboutCh } />
              <Route path='/react-portfolio/projects' render={() => project}/>
              
              {/* use button / iframe */}
              <Route path='/github' component={({history}) => { 
                  history.replace("/react-portfolio");
                  window.location.href = 'https://www.github.com/kinming92';
                  return null;
              }}/>
              <Route path='/linkedin' component={({history}) => { 
                  history.replace("/react-portfolio"); 
                  window.location.href = 'https://www.linkedin.com/in/kinmingloh/';
                  return null;
              }}/>
              <Route component={ lang === 'en' ? PageNotFoundEn : PageNotFoundCh } />
              </Switch>
                
              
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
