import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Responsive from 'react-responsive';
import $ from 'jquery';
import { connect } from 'react-redux';

import supportsWebP from 'supports-webp';

var portada;
if(supportsWebP) {
  portada = require('../../media/photos/portada.webp');
}else{
  portada = require('../../media/photos/portada.png');
}

class Parallax extends Component {

  componentDidMount(){
    $('.parallax').parallax();
  }

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    const desktopVersion = (
      <div className="parallax-container">
        <div className="lateralpanelparallax">
          <div className="row">
            <div className="col s8 offset-s4" style={{paddingRight: '40px'}}>
              <div className="row right-align" style={{marginTop: '40%'}}>
                <Fade delay={500} bottom duration={2000}>
                  <h4 style={{color: 'white'}}><b>DESARROLLANDO UNA GRAN INGENIERÍA POR MÁS DE 10 AÑOS</b></h4>
                </Fade>
              </div>
              <div className="row center-align">
                <div className="col s8 offset-s4" style={{position: 'relative'}}>
                  <Zoom delay={2500}><div className="divider" style={{backgroundColor: '#ff6600'}}/></Zoom>
                </div>
              </div>
              <div className="row right-align">
                <Fade delay={500} bottom duration={2000}>
                  <h5 style={{color: 'white'}}>Especialistas en Proyectos Hidráulicos y Sanitarios</h5>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"><img alt="mainphoto" src={portada} /></div>
      </div>
    );

    const mobileVersion = (
      <div className="parallax-container" style={{height: '700px'}}>
        <div className="lateralpanelparallax" style={{width: 'auto'}}>
          <div className="row">
            <div className="col s12">
              <div className="row center-align" style={{marginTop: '40%'}}>
                <Fade delay={500} bottom duration={2000}>
                  <h4 style={{color: 'white'}}><b>DESARROLLANDO UNA GRAN INGENIERÍA POR MÁS DE 10 AÑOS</b></h4>
                </Fade>
              </div>
              <div className="row center-align">
                <div className="col s8 offset-s2" style={{position: 'relative'}}>
                  <Zoom delay={2500}><div className="divider" style={{backgroundColor: '#ff6600'}}/></Zoom>
                </div>
              </div>
              <div className="row center-align">
                <Fade delay={500} bottom duration={2000}>
                  <h5 style={{color: 'white'}}>Especialistas en Proyectos Hidráulicos y Sanitarios</h5>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"><img alt="mainphoto" src={portada}/></div>
      </div>
    );

    return(
      <div>
        <Default>{desktopVersion}</Default>
        <Mobile>{mobileVersion}</Mobile>
      </div>
    );
  }
};

export default connect(null)(Parallax);
