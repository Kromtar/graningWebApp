import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import { Link as RouterLink } from 'react-router-dom';

import supportsWebP from 'supports-webp';

var cota, p1408, p1613, p1703, p1706, p1704;
if(supportsWebP) {
  cota = require('../../media/photos/cota.webp');
  p1408 = require('../../media/photos/galery/1408/1.webp');
  p1613 = require( '../../media/photos/galery/1613/1.webp');
  p1703 = require('../../media/photos/galery/1703/1.webp');
  p1706 = require('../../media/photos/galery/1706/1.webp');
  p1704 = require('../../media/photos/galery/1704/1.webp');
}else{
  cota = require('../../media/photos/cota.png');
  p1408 = require('../../media/photos/galery/1408/1.jpg');
  p1613 = require( '../../media/photos/galery/1613/1.jpg');
  p1703 = require('../../media/photos/galery/1703/1.jpg');
  p1706 = require('../../media/photos/galery/1706/1.jpg');
  p1704 = require('../../media/photos/galery/1704/1.jpg');
}


class Proyectos extends Component {

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={992} />;
    const Default = props => <Responsive {...props} minWidth={993} />;

    const desktopVersion = (
      <div className="row">
        <img alt="cota" src={cota} style={{position: 'absolute', opacity: '0.2', width: '100%'}}/>
        <div className="row center-align">
          <div style={{marginTop: '90px', position: 'relative'}}>
            <h4><b>NUESTROS PROYECTOS</b></h4>
          </div>
        </div>
        <div className="row center-align">
          <div className="col s8 offset-s2" style={{position: 'relative'}}>
            <div className="divider" style={{backgroundColor: '#ff6600'}}/>
          </div>
        </div>
        <div className="row center-align">
          <p className="flow-text" style={{marginLeft: '40px', marginRight: '40px'}}>
            Algunos de nuestros principales proyectos son
          </p>
        </div>
        <div className="row" style={{marginTop: '35px'}}>
          <div className="col m10 l6 offset-m1 offset-l3 hoverable z-depth-2"
            style={{
              paddingLeft: '0px',
              paddingRight: '0px',
              position: 'relative',
              maxWidth: '800px',
              width: '100%',
              left: '25%',
              transform: 'translateX(-50%)'
            }}
          >
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={2000}
              transitionTime={500}
              emulateTouch
              showStatus={false}
              dynamicHeight
            >
              <div>
                  <img alt="test" src={p1408} />
                  <p className="legend"><b>Abastecimiento de Agua Potable a Sistema APR Valle Hermoso desde la Ligua</b></p>
              </div>
              <div>
                  <img alt="test" src={p1613} />
                  <p className="legend"><b>Desarrollo de Estándares de Diseño para Sistemas de Agua Potable y Aguas Servidas - Valparaíso</b></p>
              </div>
              <div>
                  <img alt="test" src={p1704} />
                  <p className="legend"><b>Rediseño Obra de Llegada Conducción Los Aromos-Concón</b></p>
              </div>
              <div>
                  <img  alt="test" src={p1703} />
                  <p className="legend"><b>Diseño Estación Reguladora de Flujo en Conducción Vigía-Vizcachas</b></p>
              </div>
              <div>
                  <img  alt="test" src={p1706} />
                  <p className="legend"><b>Diseño y Traslado de EEAS Reñaca y Grupo Generador Asociado</b></p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="row" style={{marginTop: '50px', marginBottom: '90px'}}>
          <div className="col s10 offset-s1 center-align">
            <RouterLink
              to={'/portafolio'}
              className="waves-effect btn"
              style={{backgroundColor: '#ff6600'}}
            >
              lista de mas proyectos
            </RouterLink>
          </div>
        </div>
      </div>
    );

    const mobileVersion = (
      <div className="row">
        <img alt="cota" src={cota} style={{position: 'absolute', opacity: '0.2', width: '100%', marginTop: '-120px'}}/>
        <div className="row center-align">
          <div style={{marginTop: '45px', position: 'relative'}}>
            <h4><b>NUESTROS PROYECTOS</b></h4>
          </div>
        </div>
        <div className="row center-align">
          <div className="col s8 offset-s2" style={{position: 'relative'}}>
            <div className="divider" style={{backgroundColor: '#ff6600'}}/>
          </div>
        </div>
        <div className="row center-align">
          <p className="flow-text" style={{marginLeft: '40px', marginRight: '40px'}}>
            Algunos de nuestros principales proyectos son
          </p>
        </div>
        <div className="row" style={{marginTop: '35px'}}>
          <div className="col s12 hoverable z-depth-2" style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={2000}
              transitionTime={500}
              emulateTouch
              showStatus={false}
              dynamicHeight
            >
              <div>
                  <img alt="test" src={p1408} />
                  <p className="legend"><b>Abastecimiento de Agua Potable a Sistema APR Valle Hermoso desde la Ligua</b></p>
              </div>
              <div>
                  <img alt="test" src={p1613} />
                  <p className="legend"><b>Desarrollo de Estándares de Diseño para Sistemas de Agua Potable y Aguas Servidas - Valparaíso</b></p>
              </div>
              <div>
                  <img alt="test" src={p1704} />
                  <p className="legend"><b>Rediseño Obra de Llegada Conducción Los Aromos-Concón</b></p>
              </div>
              <div>
                  <img  alt="test" src={p1703} />
                  <p className="legend"><b>Diseño Estación Reguladora de Flujo en Conducción Vigía-Vizcachas</b></p>
              </div>
              <div>
                  <img  alt="test" src={p1706} />
                  <p className="legend"><b>Diseño y Traslado de EEAS Reñaca y Grupo Generador Asociado</b></p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="row" style={{marginTop: '50px', marginBottom: '90px'}}>
          <div className="col s10 offset-s1 center-align">
            <RouterLink
              to={'/portafolio'}
              className="waves-effect btn"
              style={{backgroundColor: '#ff6600'}}
            >
              lista de mas proyectos
            </RouterLink>
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
}

export default connect(null)(Proyectos);
