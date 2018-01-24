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
      <div className="row z-depth-5" style={{background: '#a09fa2', position: 'relative'}}>
        <Fade>
          <div className="row" style={{marginBottom: '0px'}}>
            <div className="col m4 center-align" style={{}}>
              <img alt="esval" src={esval}/>
            </div>
            <div className="col m4 center-align" style={{marginTop: '14px'}}>
              <img alt="aguasdelvalle" src={aguasdelvalle}/>
            </div>
            <div className="col m4 center-align" style={{marginTop: '-10px'}}>
              <img alt="aguasdelaltiplano" src={aguasdelaltiplano}/>
            </div>
            <div className="col m6 center-align" style={{}}>
              <img alt="essbio" src={essbio}/>
            </div>
            <div className="col m6 center-align" style={{}}>
              <img alt="aguasaraucania" src={aguasaraucania}/>
            </div>
          </div>
        </Fade>
      </div>
    );

    const mobileVersion = (
      <div className="row z-depth-5" style={{background: '#a09fa2', position: 'relative'}}>
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
