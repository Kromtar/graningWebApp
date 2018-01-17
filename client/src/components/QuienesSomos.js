import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import equipoTest from '../media/photos/proyectoTest.jpg';

class QuienesSomos extends Component {

  render(){

    const longText = "Somos una empresa de ingeniería dedicada a la elaboración de proyectos sanitarios con especialidad en el campo de las aguas subterráneas y proyectos de obras civiles, hidráulicas, sanitarias y generales de urbanización en la construcción de viviendas. Nuestro trabajo está respaldado por una experiencia de más de 20 años en la asesoría y construcción de obras vinculadas con la ingeniería hidráulica y sanitaria en los ámbitos de desarrollo Inmobiliario, Industrial y Agrícola, desarrollados por su planta ejecutiva y profesiona­les, los que se ven complementados mediante alianzas específicas con profesionales especialistas y equipos complementarios de acuerdo a las necesidades del proyecto.";

      return(
        <div className="row">
          <div className="col s4">
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
              <img className="z-depth-2" src={equipoTest} style={{width: '448px', position: 'relative'}}/>
            </div>
          </div>
          <div className="col s8" style={{paddingRight: '150px', marginTop: '160px'}}>
            <h5>
              <p className="flow-text" style={{lineHeight: '150%'}}>
                <Zoom duration={800}>{longText}</Zoom>
              </p>
            </h5>
          </div>
        </div>
      );
    }
};

export default connect(null)(QuienesSomos);
