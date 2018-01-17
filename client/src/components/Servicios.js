import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

import servicioTest from '../media/photos/proyectoTest.jpg';
import vigas from '../media/photos/vigas.png';
import pin from '../media/photos/pin.png';

class Servicios extends Component {

  render(){
      return(
        <div className="row">
          <img src={vigas} style={{position: 'absolute', opacity: '0.1', width: '100%'}}/>
          <div className="col s12" style={{marginTop: '45px', marginBottom: '37px'}}>

            <div className="row">
              <div className="col s3 center-align" style={{marginTop: '100px', position: 'relative' }}>
                <h4><b>SERVICIOS</b></h4>
                <div className="row center-align">
                  <div className="col s8 offset-s2" style={{position: 'relative'}}>
                    <div className="divider" style={{backgroundColor: '#ff6600'}}/>
                  </div>
                </div>
                <p className="flow-text" style={{marginLeft: '40px', marginRight: '40px'}}>
                  leyenda de la tematica, tiene que ser de este lago aproximadamente
                </p>
              </div>
              <div className="col s3">
                <Zoom>
                  <div class="card hoverable" style={{width: '100%'}}>
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={servicioTest}/>
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">OBRAS SANITARIAS - A.P<i class="material-icons right">arrow_upward</i></span>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">OBRAS SANITARIAS - A.P<i class="material-icons right">arrow_downward</i></span>
                      <p>Detalle del serivicio</p>
                    </div>
                  </div>
              </Zoom>
              </div>
              <div className="col s3">
                <Zoom delay={300}>
                  <div class="card hoverable" style={{width: '100%'}}>
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={servicioTest}/>
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">HIDROLOGÍA<i class="material-icons right">arrow_upward</i></span>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">HIDROLOGÍA<i class="material-icons right">arrow_downward</i></span>
                      <p>Detalle del serivicio</p>
                    </div>
                  </div>
                </Zoom>
              </div>
              <div className="col s3">
                <Zoom delay={600}>
                  <div class="card hoverable" style={{width: '100%'}}>
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={servicioTest}/>
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">INSPECCIÓN DE OBRAS<i class="material-icons right">arrow_upward</i></span>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">INSPECCIÓN DE OBRAS<i class="material-icons right">arrow_downward</i></span>
                      <p>Detalle del serivicio</p>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>

            <div className="row">
              <div className="col s3">
                <Zoom delay={900}>
                  <div class="card hoverable" style={{width: '100%'}}>
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={servicioTest}/>
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">OBRAS SANITARIAS - A.S<i class="material-icons right">arrow_upward</i></span>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">OBRAS SANITARIAS - A.S<i class="material-icons right">arrow_downward</i></span>
                      <p>Detalle del serivicio</p>
                    </div>
                  </div>
                </Zoom>
              </div>
              <div className="col s3">
                <Zoom delay={1200}>
                  <div class="card hoverable" style={{width: '100%'}}>
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={servicioTest}/>
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">URBANIZACIÓN<i class="material-icons right">arrow_upward</i></span>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">URBANIZACIÓN<i class="material-icons right">arrow_downward</i></span>
                      <p>Detalle del serivicio</p>
                    </div>
                  </div>
                </Zoom>
              </div>
              <div className="col s3">
                <Zoom delay={1500}>
                  <div class="card hoverable" style={{width: '100%'}}>
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={servicioTest}/>
                    </div>
                    <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">OTROS<i class="material-icons right">arrow_upward</i></span>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">OTROS<i class="material-icons right">arrow_downward</i></span>
                      <p>Detalle del serivicio</p>
                    </div>
                  </div>
                </Zoom>
              </div>
              <div className="col s3 center-align" style={{marginTop: '160px' }}>
                <Flip duration={3000}><img src={pin}/></Flip>
              </div>
            </div>



          </div>
        </div>
      );
    }
};

export default connect(null)(Servicios);
