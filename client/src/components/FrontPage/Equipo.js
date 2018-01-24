import React, { Component } from 'react';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';
import $ from 'jquery';

import Fade from 'react-reveal/Fade';

import plano from '../../media/photos/plano.png';
import equipo from '../../media/photos/team.png';
import pin from '../../media/photos/pin.png';
import perfil from '../../media/photos/perfil.png';

class Equipo extends Component {

  componentDidMount(){
    $('.matchHeight').matchHeight();
  }

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Default = props => <Responsive {...props} minWidth={768} />;

    const bioText1 = "“La Eficiencia es una forma de ser”"
    const bioText2 = "Cuando fundé, hace 25 años, GranIng Ingeniería , me puse una meta: “Ser la Consultora en Ingeniería más Eficiente de la Quinta Región”. Desde el primer día, junto a quienes me han acompañado, hemos respetado esta idea básica, porque entendimos que era la mejor manera de competir en un mercado tan exigente, donde el error o la incompetencia, se pagan muy caro.";
    const bioText3 = "Esta filosofía siempre ha estado presente, en cada uno de nuestros actos y por supuesto en cada uno de los profesionales que forman GranIng Ingeniería.";

    const desktopVersion = (
      <div>
        <img alt="plano" src={plano} style={{position: 'absolute', opacity: '0.2', width: '100%', marginTop: '-90px'}}/>
        <div className="row center-align">
          <div style={{marginTop: '90px', position: 'relative', color: 'white'}}>
            <h4><b>NUESTRO EQUIPO</b></h4>
          </div>
        </div>
        <div className="row center-align">
          <div className="col s2 offset-s5" style={{position: 'relative'}}>
            <div className="divider" style={{backgroundColor: '#ff6600'}}/>
          </div>
        </div>

        <div className="row" style={{marginTop: '60px'}}>

            <div className="col s3 center-align matchHeight" style={{position: 'relative', marginTop: '25px'}}>
              <div className="matchHeight" style={{display: 'inline-table', overflow: 'hidden'}}>
                <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                  <div className="row">
                    <img alt="fundador" src={perfil} className="circle z-depth-2" style={{width: '171px', height: '171px'}}/>
                  </div>
                  <div className="row center-align" style={{color: 'white'}}>
                    <p style={{marginBottom: '0px'}}><b>MAURICIO CORREA</b></p>
                    <p style={{marginTop: '0px'}}><i>Gerente general</i></p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col s9 left-align matchHeight" style={{color: 'white'}}>
              <h5><p style={{position: 'relative'}}>{bioText1}</p></h5>
              <p className="flow-text" style={{position: 'relative'}}>{bioText2}</p>
              <p className="flow-text" style={{position: 'relative'}}>{bioText3}</p>
            </div>

        </div>
        <div className="row center-align ">
          <img alt="pin" src={pin} style={{position: 'relative'}}/>
        </div>
        <div className="row">
          <div className="col s10 offset-s1 center-align " style={{position: 'relative', marginBottom: '50px'}}>
            <Fade duration={1000}><img alt="equipo" src={equipo} className="z-depth-2" style={{width: '100%', maxWidth: '1200px'}}/></Fade>
          </div>
        </div>
      </div>
    );

    const mobileVersion = (
      <div>
        <img alt="plano" src={plano} style={{position: 'absolute', opacity: '0.2', width: '100%', marginTop: '-90px'}}/>
        <div className="row center-align">
          <div style={{marginTop: '90px', position: 'relative', color: 'white'}}>
            <h4><b>NUESTRO EQUIPO</b></h4>
          </div>
        </div>
        <div className="row center-align">
          <div className="col s2 offset-s5" style={{position: 'relative'}}>
            <div className="divider" style={{backgroundColor: '#ff6600'}}/>
          </div>
        </div>

        <div className="row" style={{marginTop: '30px'}}>

            <div className="col s12 center-align" style={{position: 'relative', marginTop: '25px'}}>
              <div className="row">
                <img alt="fundador" src={perfil} className="circle z-depth-2" style={{width: '200px', height: '200px'}}/>
              </div>
              <div className="row center-align" style={{color: 'white'}}>
                <p style={{marginBottom: '0px'}}><b>MAURICIO CORREA</b></p>
                <p style={{marginTop: '0px'}}><i>Gerente general</i></p>
              </div>
            </div>

            <div className="col s12 center-align" style={{color: 'white'}}>
              <h5><p>{bioText1}</p></h5>
              <p className="flow-text">{bioText2}</p>
              <p className="flow-text">{bioText3}</p>
            </div>

        </div>
        <div className="row center-align ">
          <img alt="pin" src={pin} style={{position: 'relative'}}/>
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

export default connect(null)(Equipo);
