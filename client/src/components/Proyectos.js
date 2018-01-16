import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';

import proyectoTest from '../media/photos/proyectoTest.jpg';

class Proyectos extends Component {

  render(){
      return(
        <div>
          <div className="row center-align">
            <div style={{marginTop: '90px'}}>
              <h4><b>NUESTROS PROYECTOS</b></h4>
            </div>
          </div>
          <div className="row" style={{marginTop: '35px'}}>
            <div className="col s6 offset-s3 hoverable z-depth-2" style={{paddingLeft: '0px', paddingRight: '0px'}}>

              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={4000}
                transitionTime={500}
                emulateTouch
                showStatus={false}
              >
                <div>
                    <img src={proyectoTest} />
                    <p className="legend">Proyecto 1 LINK +</p>
                </div>
                <div>
                    <img src={proyectoTest} />
                    <p className="legend">Proyecto 2 LINK +</p>
                </div>
                <div>
                    <img src={proyectoTest} />
                    <p className="legend">Proyecto 3 LINK +</p>
                </div>
            </Carousel>


            </div>
          </div>
        </div>
      );
    }
};

export default connect(null)(Proyectos);
