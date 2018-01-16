import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import { connect } from 'react-redux';

import mainphoto from '../media/photos/mainphoto.jpg';

class Parallax extends Component {

  componentDidMount(){
    $('.parallax').parallax();
  }

  render(){
      return(
        <div className="parallax-container">
          <div className="lateralpanelparallax">
            <div className="row">
              <div className="col s8 offset-s4" style={{height: '800px'}}>
                <div className="row right-align" style={{marginTop: '40%'}}>
                  <Fade bottom duration={3000}><h4>Graning</h4></Fade>
                </div>
              </div>
            </div>
          </div>
          <div class="parallax"><img src={mainphoto}/></div>
        </div>
      );
    }
};

export default connect(null)(Parallax);
