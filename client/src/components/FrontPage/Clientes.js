import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

import Fade from 'react-reveal/Fade';

import essbio from '../../media/photos/essbio.png';
import esval from '../../media/photos/esval.png';
import aguasdelvalle from '../../media/photos/aguasdelvalle.png';
import aguasaraucania from '../../media/photos/aguasaraucania.png';
import aguasdelaltiplano from '../../media/photos/aguasdelaltiplano.png';

class Clientes extends Component {

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    const desktopVersion = (
      <div className="row z-depth-5" style={{background: '#a09fa2'}}>
        <div className="col s1 center-align">
          <p className="flow-text" style={{color: 'black', paddingLeft: '65px', paddingRight: '0px'}}>
            Clientes:
          </p>
        </div>
        <div className="col s2 center-align" style={{marginTop: '-5px'}}>
          <Fade right big><img alt="esval" src={esval}/></Fade>
        </div>
        <div className="col s2 center-align">
          <Fade delay={500} right big><img alt="essbio" src={essbio}/></Fade>
        </div>
        <div className="col s2 center-align" style={{marginTop: '-13px'}}>
          <Fade delay={1000} right big><img alt="aguasdelaltiplano" src={aguasdelaltiplano}/></Fade>
        </div>
        <div className="col s2 center-align" style={{marginTop: '10px'}}>
          <Fade delay={1500} right big><img alt="aguasdelvalle" src={aguasdelvalle}/></Fade>
        </div>
        <div className="col s2 center-align" style={{marginTop: '-4px'}}>
          <Fade delay={2000} right big><img alt="aguasaraucania" src={aguasaraucania}/></Fade>
        </div>
      </div>
    );

    const mobileVersion = (
      <div className="row z-depth-5" style={{background: '#a09fa2'}}>
        <div className="col s12 center-align">
          <p className="flow-text" style={{color: 'black', paddingLeft: '0px', paddingRight: '0px'}}>
            <b>Nuestros Clientes</b>
          </p>
        </div>
        <Fade>
          <div className="col s12 center-align" style={{marginTop: '-5px', paddingLeft: '0px', paddingRight: '0px'}}>
            <img alt="esval" src={esval}/>
          </div>
          <div className="col s12 center-align" style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <img alt="essbio" src={essbio}/>
          </div>
          <div className="col s12 center-align" style={{marginTop: '-13px', paddingLeft: '0px', paddingRight: '0px'}}>
            <img alt="aguasdelaltiplano" src={aguasdelaltiplano}/>
          </div>
          <div className="col s12 center-align" style={{marginTop: '10px', paddingLeft: '0px', paddingRight: '0px'}}>
            <img alt="aguasdelvalle" src={aguasdelvalle}/>
          </div>
          <div className="col s12 center-align" style={{marginTop: '-4px', paddingLeft: '0px', paddingRight: '0px'}}>
            <img alt="aguasaraucania" src={aguasaraucania}/>
          </div>
        </Fade>
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

export default connect(null)(Clientes);
