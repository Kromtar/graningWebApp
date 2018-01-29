import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import * as actions from '../../actions';

import Image from 'react-image-webp';
import supportsWebP from 'supports-webp';

var dummy;
if(supportsWebP) {
  dummy = require('../../media/photos/dummy.webp');
}else{
  dummy = require('../../media/photos/dummy.png');
}

class GaleryProject extends Component {

  renderFronImg(){
    try{
      return <Image
        style={{minWidth: '100%'}}
        alt="hidro"
        className="activator"
        src={require(`../../media/photos/galery/${this.props.project.internalcode}/1.jpg`)}
        webp={require(`../../media/photos/galery/${this.props.project.internalcode}/1.webp`)}
      />;
    }catch(err){
      return <Image alt="test" src={dummy} />;
    }
  }

  render(){
    return(
      <div>

        <div className="card hoverable" style={{width: '100%'}}>
          <div className="card-image waves-effect waves-block waves-light" style={{width: '100%', overflow: 'hidden'}}>
            {this.renderFronImg()}
          </div>
          <div className="card-content row activator">
            <div className="col s11">
              <span className="card-title activator grey-text text-darken-4">{this.props.project.name}</span>
            </div>
            <div className="col s1">
              <i style={{cursor: 'pointer'}} className="material-icons right">arrow_upward</i>
            </div>
          </div>
          <div className="card-reveal">
            <div className="row">
              <div className="col s11">
                <span className="card-title grey-text text-darken-4">{this.props.project.name}</span>
              </div>
              <div className="col s1 card-title">
                <i style={{cursor: 'pointer'}} className="material-icons right">arrow_downward</i>
              </div>
            </div>
            <ul style={{marginTop: '25px'}}>
              <div className="row">
                <li><div id="dot"/>{this.props.project.company}</li>
                <li><div id="dot"/>{this.props.project.year}</li>
                <li><div id="dot"/>{this.props.project.description}</li>
              </div>
              <div className="row center-align">
                <a
                  onClick={() => {
                    this.props.selectProjectDetail(this.props.project);
                    $("#projectDetail").modal('open');
                  }}
                  className="waves-effect btn"
                  style={{backgroundColor: '#ff6600'}}>
                  Ver mas
                  <i className="material-icons right">visibility</i>
                </a>
              </div>
            </ul>
          </div>
        </div>

      </div>
    );
  }
};

export default connect(null, actions)(GaleryProject);
