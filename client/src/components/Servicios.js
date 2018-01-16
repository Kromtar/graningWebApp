import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import servicioTest from '../media/photos/proyectoTest.jpg';

class Servicios extends Component {

  render(){
      return(
        <div className="row">
          <div className="col s3">
            Sector titutlo servicios
          </div>
          <div className="col s9">

            <div className="row">
              <div className="col s4">
                <div class="card hoverable" style={{width: '100%'}}>
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={servicioTest}/>
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Servicio 1<i class="material-icons right">arrow_upward</i></span>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Servicio 1<i class="material-icons right">arrow_downward</i></span>
                    <p>Detalle del serivicio</p>
                  </div>
                </div>
              </div>
              <div className="col s4">
                tarjeta 2
              </div>
              <div className="col s4">
                tarjeta 3
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                tarjeta 4
              </div>
              <div className="col s4">
                tarjeta 5
              </div>
              <div className="col s4">
                tarjeta 6
              </div>
            </div>



          </div>
        </div>
      );
    }
};

export default connect(null)(Servicios);
