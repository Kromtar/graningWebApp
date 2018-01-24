import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import Zoom from 'react-reveal/Zoom';
import matchHeight from 'jquery-match-height';
import $ from 'jquery';

import nosotros from '../../media/photos/nosotros.jpg';

class QuienesSomos extends Component {

  componentDidMount(){
    $('.matchHeight').matchHeight();
  }

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    const longText = "Somos una Empresa de Ingeniería con más de 10 años de experiencia especializada en el Diseño de obras de Ingeniería Hidráulica, Sanitaria y Estructural. Nuestros servicios van dirigidos principalmente a Empresas de Servicios Sanitarios, Inmobiliarias, Concesionarias, MOP, Serviu, Municipalidades e industria, entre otras. En GranIng Ingeniería nos destacamos por brindar soluciones óptimas en proyectos de alta complejidad, realizando así un trabajo de alta calidad, acorde las necesidades de nuestros clientes y orientado a las demandas que exige el mercado.";

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
            <img alt="equipo" className="z-depth-2" src={nosotros} style={{width: '100%', position: 'relative'}}/>
          </div>
        </div>
        <div className="col s8 matchHeight">
          <div className="matchHeight" style={{display: 'table', overflow: 'hidden'}}>
            <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
              <h5>
                <Zoom duration={800}>
                  <p className="flow-text" style={{lineHeight: '200%'}}>
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
            <p className="flow-text center-align" style={{lineHeight: '150%'}}>
              {longText}
            </p>
          </h5>
        </div>
        <div className="col s12">
          <div className="row center-align" style={{marginTop: '20px'}}>
            <img alt="equipo" className="z-depth-2" src={nosotros} style={{width: '100%', position: 'relative'}}/>
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
