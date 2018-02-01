import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import Responsive from 'react-responsive';

import supportsWebP from 'supports-webp';
import Image from 'react-image-webp';

var dummy;
if(supportsWebP) {
  dummy = require('../../media/photos/dummy.webp');
}else{
  dummy = require('../../media/photos/dummy.png');
}

class deleteProjectConfirmModal extends Component {

  renderCarousel(numberOfImg){
    var galery =[];
    for(var i=1; i<=numberOfImg; i++){
      galery.push(<div key={i}>{this.renderImg(i)}</div>);
    }
    return galery;
  }

  renderImg(number){
    try{
      return <Image
        alt="test"
        webp={require(`../../media/photos/galery/${this.props.projectDetailSelected.internalcode}/${number}.webp`)}
        src={require(`../../media/photos/galery/${this.props.projectDetailSelected.internalcode}/${number}.jpg`)}
      />;
    }catch(err){
      console.log(err);
      return <img alt="test" src={dummy} />;
    }
  }

  carousel(){
    return (
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={2000}
        transitionTime={500}
        emulateTouch
        showStatus={false}
      >
        {typeof(this.props.projectDetailSelected) === 'undefined' ? <img alt="test" src={dummy} /> : this.renderCarousel(this.props.projectDetailSelected.numberOfImg)}
      </Carousel>
    );
  }

  renderText(){
    if(typeof(this.props.projectDetailSelected) !== 'undefined'){
      return (
        <div>
          <div className="row center-align">
            <div className="col s12 l4 offset-l2" style={{marginBottom: '5px'}}>
              <b>{this.props.projectDetailSelected.name}</b>
            </div>
            <div className="col s12 l2" style={{marginBottom: '5px'}}>
              <b>Cliente: {this.props.projectDetailSelected.company}</b>
            </div>
            <div className="col s12 l2" style={{marginBottom: '5px'}}>
              <b>Año: {this.props.projectDetailSelected.year}</b>
            </div>
          </div>
          <div className="divider"/>
          <p className="flow-text row center-align" style={{fontSize: '1.2rem'}}>
            <b>Alcances</b>
          </p>
          <p className="flow-text row center-align" style={{fontSize: '1.2rem'}}>
            {this.props.projectDetailSelected.description}
          </p>
          <div className="divider"/>
          <p className="flow-text row center-align" style={{fontSize: '1.2rem'}}>
            <b>Obras Proyectadas</b>
          </p>
          <p className="flow-text row center-align" style={{fontSize: '1.2rem'}}>
            {this.props.projectDetailSelected.work}
          </p>
        </div>
      );
    }else{
      return <div>NO DATA</div>;
    }

  }

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={992} />;
    const Default = props => <Responsive {...props} minWidth={993} />;

    return(
      <div className="modal-content" style={{paddingBottom: '3px'}}>
        <div style={{position:'absolute', top:'0px', bottom:'60px', left:'0px', right:'0px', overflow:'auto', paddingTop: '10px'}}>
          <div className="row">
            <Default>
              <div className="desktop col m6 l6 offset-l3"
                style={{
                  position: 'relative',
                  maxWidth: '600px',
                  width: '100%',
                  left: '25%',
                  transform: 'translateX(-50%)'
                }}
              >
                {this.carousel()}
              </div>
            </Default>
            <Mobile>
              <div className="cellphone col s12"
                style={{
                  position: 'relative',
                  maxWidth: '600px',
                  width: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                {this.carousel()}
              </div>
            </Mobile>
          </div>
          <div className="row">
            <div className="col s12">
              {this.renderText()}
            </div>
          </div>
        </div>
        <div style={{position:'absolute', bottom:'0px', height:'60px', left:'0px', right:'0px', overflow:'hidden'}}>
          <div className="divider"></div>
          <div className="modal-footer">
            <a
              onClick={() => this.props.onClose()}
              className="modal-action modal-close waves-effect waves-green btn-flat">
              Cerrar
            </a>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    projectDetailSelected: state.projectDetailSelected.projectSelected,
  };
};

export default connect(mapStateToProps)(deleteProjectConfirmModal);
