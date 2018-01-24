import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Responsive from 'react-responsive';

import footerimg from '../../media/photos/footerImg.png';
import pin from '../../media/photos/pin.png';

import keys from '../../config/keys';

class Contacto extends Component {

  componentDidMount(){
    $('.parallax').parallax();
  }

  static defaultProps = {
    center: {lat: -33.021161, lng: -71.551241},
    zoom: 15
  };

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    const desktopVersion = (
      <div className="parallax-container" style={{height: '975px'}}>
        <div style={{width: '100%', position: 'absolute'}}>
          <div className="row" style={{marginTop: '88px'}}>
            <div className="col m12 l8 offset-l2 z-depth-5" style={{height: '400px', backgroundColor: 'rgba(0, 48, 91, 0.6)', paddingLeft: '0px'}}>
              <div className="col s6" style={{height: '100%', paddingLeft: '0px'}}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: process.env.GOOGLEMAPSAPYKEY || keys.googleMapsApiKey,
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
              </div>
              <div className="col m6 left-align">
                <div className="row center-align" style={{marginBottom: '3px'}}>
                  <div style={{marginTop: '30px', position: 'relative'}}>
                    <h4 style={{color: 'white'}}><b>CONTACTO</b></h4>
                  </div>
                </div>
                <div className="row center-align" style={{marginBottom: '5px'}}>
                  <div className="col s6 offset-s3" style={{position: 'relative'}}>
                    <div className="divider" style={{backgroundColor: '#ff6600'}}/>
                  </div>
                </div>
                <div style={{color: 'white'}}>
                  <h5><p>Avenida Libertad 269, Oficina 304.</p></h5>
                  <h5><p>Viña del Mar.</p></h5>
                  <h5><p>Email: ingenieria@graning.cl</p></h5>
                  <h5><p>Tel: +56 32 2694250</p></h5>
                </div>
                <div className="row center-align ">
                  <img alt="pin" src={pin} style={{position: 'relative'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"><img alt="footer" src={footerimg}/></div>
      </div>
    );

    const mobileVersion = (
      <div className="parallax-container" style={{height: '975px'}}>
        <div style={{width: '100%', position: 'absolute'}}>
          <div className="row" style={{marginTop: '88px'}}>
            <div className="col s12 z-depth-5" style={{height: '320px', backgroundColor: 'rgba(0, 48, 91, 0.6)', paddingLeft: '0px', paddingRight: '0px'}}>
              <div className="row center-align" style={{marginBottom: '3px'}}>
                <div style={{marginTop: '30px', position: 'relative'}}>
                  <h4 style={{color: 'white'}}><b>CONTACTO</b></h4>
                </div>
              </div>
              <div className="row center-align" style={{marginBottom: '5px'}}>
                <div className="col s6 offset-s3" style={{position: 'relative'}}>
                  <div className="divider" style={{backgroundColor: '#ff6600'}}/>
                </div>
              </div>
              <div className="col s12" style={{color: 'white'}}>
                <h5><p>Avenida Libertad 269, Oficina 304.</p></h5>
                <h5><p>Viña del Mar.</p></h5>
                <h5><p>Email: ingenieria@graning.cl</p></h5>
                <h5><p>Tel: +56 32 2694250</p></h5>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: '88px'}}>
            <div className="col s12 z-depth-5" style={{height: '400px', backgroundColor: 'rgba(0, 48, 91, 0.6)', paddingLeft: '0px', paddingRight: '0px'}}>
              <div style={{height: '100%'}}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: process.env.GOOGLEMAPSAPYKEY || keys.googleMapsApiKey,
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax"><img alt="footer" src={footerimg}/></div>
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

export default connect(null)(Contacto);
