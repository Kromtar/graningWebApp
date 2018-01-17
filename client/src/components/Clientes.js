import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fade from 'react-reveal/Fade';

import essbio from '../media/photos/essbio.png';
import esval from '../media/photos/esval.png';
import aguasdelvalle from '../media/photos/aguasdelvalle.png';
import aguasaraucania from '../media/photos/aguasaraucania.png';
import aguasdelaltiplano from '../media/photos/aguasdelaltiplano.png';

class Clientes extends Component {

  render(){
      return(
        <div className="row z-depth-5" style={{background: '#a09fa2'}}>
          <div className="col s1 center-align">
            <p className="flow-text" style={{color: 'black', paddingLeft: '65px', paddingRight: '0px'}}>
              Clientes:
            </p>
          </div>
          <div className="col s2 center-align" style={{marginTop: '-5px'}}>
            <Fade right big><img src={esval}/></Fade>
          </div>
          <div className="col s2 center-align">
            <Fade delay={500} right big><img src={essbio}/></Fade>
          </div>
          <div className="col s2 center-align" style={{marginTop: '-13px'}}>
            <Fade delay={1000} right big><img src={aguasdelaltiplano}/></Fade>
          </div>
          <div className="col s2 center-align" style={{marginTop: '10px'}}>
            <Fade delay={1500} right big><img src={aguasdelvalle}/></Fade>
          </div>
          <div className="col s2 center-align" style={{marginTop: '-4px'}}>
            <Fade delay={2000} right big><img src={aguasaraucania}/></Fade>
          </div>
        </div>
      );
    }
};

export default connect(null)(Clientes);
