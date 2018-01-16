import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class QuienesSomos extends Component {

  render(){

    const longText = "Somos una empresa de ingeniería dedicada a la elaboración de proyectos sanitarios con especialidad en el campo de las aguas subterráneas y proyectos de obras civiles, hidráulicas, sanitarias y generales de urbanización en la construcción de viviendas. Nuestro trabajo está respaldado por una experiencia de más de 20 años en la asesoría y construcción de obras vinculadas con la ingeniería hidráulica y sanitaria en los ámbitos de desarrollo Inmobiliario, Industrial y Agrícola, desarrollados por su planta ejecutiva y profesiona­les, los que se ven complementados mediante alianzas específicas con profesionales especialistas y equipos complementarios de acuerdo a las necesidades del proyecto.";

      return(
        <div>
          <div className="row center-align">
            <div style={{marginTop: '90px'}}>
              <h4><b>QUIENES SOMOS</b></h4>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s2 offset-s5">
              <div className="divider" style={{backgroundColor: '#ff6600'}}/>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s8 offset-s2">
              <div style={{marginTop: '35px'}}>
                <h5>
                  <p className="flow-text" style={{lineHeight: '150%'}}>
                    <Zoom duration={1000}>{longText}</Zoom>
                  </p>
                </h5>
              </div>
            </div>
          </div>
        </div>
      );
    }
};

export default connect(null)(QuienesSomos);
