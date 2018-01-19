import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

import proyectoTest from '../../media/photos/proyectoTest.jpg';
import cota from '../../media/photos/cota.png';

class Proyectos extends Component {

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    const desktopVersion = (
      <div className="row">
        <img alt="cota" src={cota} style={{position: 'absolute', opacity: '0.2', width: '100%'}}/>
        <div className="row center-align">
          <div style={{marginTop: '90px', position: 'relative'}}>
            <h4><b>NUESTROS PROYECTOS</b></h4>
          </div>
        </div>
        <div className="row center-align">
          <div className="col s2 offset-s5" style={{position: 'relative'}}>
            <div className="divider" style={{backgroundColor: '#ff6600'}}/>
          </div>
        </div>
        <div className="row center-align">
          <p className="flow-text" style={{marginLeft: '40px', marginRight: '40px'}}>
            leyenda de la tematica, tiene que ser de este lago aproximadamente
          </p>
        </div>
        <div className="row" style={{marginTop: '35px'}}>
          <div className="col m10 l6 offset-m1 offset-l3 hoverable z-depth-2" style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={2000}
              transitionTime={500}
              emulateTouch
              showStatus={false}
            >
              <div>
                  <img alt="test" src={proyectoTest} />
                  <p className="legend"><b>Este es un proyecto con escripcion muy bonita pero tiene un trampolin muy grande</b></p>
              </div>
              <div>
                  <img alt="test" src={proyectoTest} />
                  <p className="legend"><b>Este es un proyecto con escripcion muy bonita pero tiene un trampolin muy grande</b></p>
              </div>
              <div>
                  <img  alt="test" src={proyectoTest} />
                  <p className="legend"><b>Este es un proyecto con escripcion muy bonita pero tiene un trampolin muy grande</b></p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="row" style={{marginTop: '50px', marginBottom: '90px'}}>
          <div className="col s2 offset-s5 center-align">
            <a className="waves-effect btn" style={{backgroundColor: '#ff6600'}}>todos los proyectos</a>
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
          <div className="col s2 offset-s5" style={{position: 'relative'}}>
            <div className="divider" style={{backgroundColor: '#ff6600'}}/>
          </div>
        </div>
        <div className="row center-align">
          <p className="flow-text" style={{marginLeft: '40px', marginRight: '40px'}}>
            leyenda de la tematica, tiene que ser de este lago aproximadamente
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
            >
              <div>
                  <img alt="test" src={proyectoTest} />
                  <p className="legend"><b>Este es un proyecto con escripcion muy bonita pero tiene un trampolin muy grande</b></p>
              </div>
              <div>
                  <img alt="test" src={proyectoTest} />
                  <p className="legend"><b>Este es un proyecto con escripcion muy bonita pero tiene un trampolin muy grande</b></p>
              </div>
              <div>
                  <img alt="test" src={proyectoTest} />
                  <p className="legend"><b>Este es un proyecto con escripcion muy bonita pero tiene un trampolin muy grande</b></p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="row" style={{marginTop: '50px', marginBottom: '90px'}}>
          <div className="col s8 offset-s2 center-align">
            <a className="waves-effect btn" style={{backgroundColor: '#ff6600'}}>todo los proyectos</a>
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
