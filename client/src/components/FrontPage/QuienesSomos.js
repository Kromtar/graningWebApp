import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import Zoom from 'react-reveal/Zoom';
import matchHeight from 'jquery-match-height';
import $ from 'jquery';

import equipoTest from '../../media/photos/proyectoTest.jpg';

class QuienesSomos extends Component {

  componentDidMount(){
    $('.matchHeight').matchHeight();
  }

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    const longText = "Somos una empresa de ingeniería dedicada a la elaboración de proyectos sanitarios con especialidad en el campo de las aguas subterráneas y proyectos de obras civiles, hidráulicas, sanitarias y generales de urbanización en la construcción de viviendas. Nuestro trabajo está respaldado por una experiencia de más de 20 años en la asesoría y construcción de obras vinculadas con la ingeniería hidráulica y sanitaria en los ámbitos de desarrollo Inmobiliario, Industrial y Agrícola, desarrollados por su planta ejecutiva y profesiona­les, los que se ven complementados mediante alianzas específicas con profesionales especialistas y equipos complementarios de acuerdo a las necesidades del proyecto.";

    const desktopVersion = (
      <div className="row">
        <div className="col s4 matchHeight">
          <div className="row center-align">
            <div style={{marginTop: '60px', position: 'relative'}}>
              <h4><b>QUIENES SOMOS</b></h4>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s6 offset-s3" style={{position: 'relative'}}>
              <div className="divider" style={{backgroundColor: '#ff6600'}}/>
            </div>
          </div>
          <div className="row center-align" style={{marginTop: '40px'}}>
            <img alt="equipo" className="z-depth-2" src={equipoTest} style={{width: '100%', position: 'relative'}}/>
          </div>
        </div>
        <div className="col s8 matchHeight">
          <div className="matchHeight" style={{display: 'table', overflow: 'hidden'}}>
            <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
              <h5>
                <Zoom duration={800}>
                  <p className="flow-text" style={{lineHeight: '150%'}}>
                    {longText}
                  </p>
                </Zoom>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );

    const mobileVersion = (
      <div className="row">
        <div className="col s12">
          <div className="row center-align">
            <div style={{position: 'relative'}}>
              <h4><b>QUIENES SOMOS</b></h4>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s6 offset-s3" style={{position: 'relative'}}>
              <div className="divider" style={{backgroundColor: '#ff6600'}}/>
            </div>
          </div>
          <h5>
            <Zoom duration={800}>
              <p className="flow-text center-align" style={{lineHeight: '150%'}}>
                {longText}
              </p>
            </Zoom>
          </h5>
        </div>
        <div className="col s12">
          <div className="row center-align" style={{marginTop: '20px'}}>
            <img alt="equipo" className="z-depth-2" src={equipoTest} style={{width: '100%', position: 'relative'}}/>
          </div>
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

export default connect(null)(QuienesSomos);
