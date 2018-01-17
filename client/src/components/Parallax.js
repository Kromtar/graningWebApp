import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import $ from 'jquery';
import { connect } from 'react-redux';

import mainphoto from '../media/photos/mainphoto.jpg';

class Parallax extends Component {

  componentDidMount(){
    $('.parallax').parallax();
  }

  render(){
      return(
        <div className="parallax-container">
          <div className="lateralpanelparallax">
            <div className="row">
              <div className="col s8 offset-s4" style={{height: '800px', paddingRight: '40px'}}>
                <div className="row right-align" style={{marginTop: '40%'}}>
                  <Fade bottom duration={2000}>
                    <h4><b>DESARROLLO DE PROYECTOS DE INGENIERÍA CIVIL</b></h4>
                  </Fade>
                </div>
                <div className="row center-align">
                  <div className="col s8 offset-s4" style={{position: 'relative'}}>
                    <Zoom delay={2000}><div className="divider" style={{backgroundColor: '#ff6600'}}/></Zoom>
                  </div>
                </div>
                <div className="row right-align">
                  <Fade bottom duration={2000}>
                    <h5>Especialistas en Proyectos Hidráulicos y Sanitarios</h5>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div class="parallax"><img src={mainphoto}/></div>
        </div>
      );
    }
};

export default connect(null)(Parallax);
