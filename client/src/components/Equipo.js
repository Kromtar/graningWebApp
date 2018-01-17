import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fade from 'react-reveal/Fade';

import plano from '../media/photos/plano.png';
import equipo from '../media/photos/mainphoto.jpg';
import pin from '../media/photos/pin.png';

class Equipo extends Component {

  render(){

      const bioText1 = "“La Eficiencia es una forma de ser”"
      const bioText2 = "Cuando fundé, hace 25 años, GranIng Ingeniería , me puse una meta: “Ser la Consultora en Ingeniería más Eficiente de la Quinta Región”. Desde el primer día, junto a quienes me han acompañado, hemos respetado esta idea básica, porque entendimos que era la mejor manera de competir en un mercado tan exigente, donde el error o la incompetencia, se pagan muy caro.";
      const bioText3 = "Esta filosofía siempre ha estado presente, en cada uno de nuestros actos y por supuesto en cada uno de los profesionales que forman GranIng Ingeniería.";
      const bioText4 = "Enfrentando cada nuevo proyecto, con pasión, dedicación y método, sabiendo que la Eficiencia, siempre nos colocaría un paso adelante. Hoy, puedo decir con orgullo, que GranIng Ingeniería, es una empresa con prestigio, con una trayectoria intachable y que enfrenta el futuro con las mejores herramientas.";
      const bioText5 = "Porque cada uno de nosotros… ingenieros, arquitectos, constructores, técnicos y asistentes sociales, hemos adoptado la Eficiencia, como una forma de ser.";

      return(
        <div>
          <img src={plano} style={{position: 'absolute', opacity: '0.1', width: '100%'}}/>
          <div className="row center-align">
            <div style={{paddingTop: '90px', position: 'relative', color: 'white'}}>
              <h4><b>NUESTRO EQUIPO</b></h4>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s2 offset-s5" style={{position: 'relative'}}>
              <div className="divider" style={{backgroundColor: '#ff6600'}}/>
            </div>
          </div>

          <div className="row" style={{marginTop: '60px'}}>

              <div className="col s2 offset-s1 center-align" style={{position: 'relative', marginTop: '25px'}}>
                <div className="row">
                  <img src={equipo} className="circle z-depth-2" style={{width: '200px', height: '200px'}}/>
                </div>
                <div className="row center-align" style={{color: 'white'}}>
                  <p style={{marginBottom: '0px'}}><b>MAURICIO CORREA</b></p>
                  <p style={{marginTop: '0px'}}><i>Gerente general</i></p>
                </div>
              </div>


              <div className="col s8 left-align" style={{color: 'white'}}>
                <p><h5>{bioText1}</h5></p>
                <p className="flow-text">{bioText2}</p>
                <p className="flow-text">{bioText3}</p>
              </div>

          </div>
          <div className="row center-align ">
            <img src={pin} style={{position: 'relative'}}/>
          </div>
          <div className="row">
            <div className="col s10 offset-s1 center-align " style={{position: 'relative'}}>
              <Fade><img src={equipo} className="z-depth-2" style={{width: '100%', height: '500px'}}/></Fade>
            </div>
          </div>
        </div>
      );
    }
};

export default connect(null)(Equipo);
