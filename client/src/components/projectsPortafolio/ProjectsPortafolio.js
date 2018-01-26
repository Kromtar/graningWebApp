import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Responsive from 'react-responsive';
import $ from 'jquery';
import { Link as RouterLink } from 'react-router-dom';
import Zoom  from 'react-reveal/Zoom';
import { animateScroll as scroll } from 'react-scroll'
import matchHeight from 'jquery-match-height';

import GaleryProject from './GaleryProject';
import ProjectDetailModal from './ProjectDetailModal';

import logo from '../../media/photos/logo.webp';

class projectsPortafolio extends Component {

  state = {
    fetchGaleryEnd: false,
  }

  async componentDidMount(){
    await this.props.fetchGalery();
    this.setState({fetchGaleryEnd: true});

    $('#projectDetail').modal({
      dismissible: true,
      opacity: .5,
      inDuration: 300,
      outDuration: 200
    });

    $('.matchHeight').matchHeight();


  }

  renderGalery(){
    return _.map(this.props.galeryList, projectItem =>{
      return (
        <div key={projectItem._id} className="col s12 m6 l4"
          style={{
            height: '500px',
          }}
        >
          <GaleryProject
            project={projectItem}
          />
        </div>
      );
    });
  }

  render(){

    const Mobile = props => <Responsive {...props} maxWidth={992} />;
    const Default = props => <Responsive {...props} minWidth={993} />;

    return(
      <div>

        <Default>
          <nav style={{top: '0px'}}>
            <div className="nav-wrapper">
              <div className="brand-logo center">
                <Zoom><img alt="logo" src={logo} style={{height: '88px', marginLeft: '20px'}}/></Zoom>
              </div>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li style={{paddingRight: '25px'}}>
                  <RouterLink style={{color: '#00305b'}} to={'/'}>
                    REGRESAR
                  </RouterLink>
                </li>
              </ul>
            </div>
          </nav>
        </Default>

        <Mobile>
          <nav style={{top: '0px'}}>
            <div className="nav-wrapper row">
              <div className="col s2">
                <a data-activates="slide-out">
                  <RouterLink to={'/'}>
                    <i className="material-icons" style={{color: '#ff6600', fontSize: '40px', lineHeight: '86px'}}>arrow_back</i>
                  </RouterLink>
                </a>
              </div>
              <div className="col s10 right-align">
                <Zoom><img alt="logo" src={logo} style={{height: '88px', marginLeft: '20px'}}/></Zoom>
              </div>
            </div>
          </nav>
        </Mobile>

        <div className="row" style={{paddingTop: '130px', backgroundColor: '#00305b', marginBottom: '0px'}}>

          <div className="row center-align">
            <div style={{marginTop: '45px', position: 'relative', color: 'white'}}>
              <h4><b>ALGUNOS DE NUESTROS PROYECTOS</b></h4>
            </div>
          </div>
          <div className="row center-align">
            <div className="col s8 offset-s2" style={{marginBottom: '45px', position: 'relative'}}>
              <div className="divider" style={{backgroundColor: '#ff6600'}}/>
            </div>
          </div>

          <div style={{
            position: 'relative',
            maxWidth: '1500px',
            width: '100%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>

            <div className="row">
              {this.renderGalery()}
            </div>

          </div>


          {/* Modal Detalle de un proyecto*/}
          <div
            id="projectDetail"
            className="modal modalProjectDetail"
          >
            <ProjectDetailModal
              onClose={() => $("#projectDetail").modal('close')}
            />
          </div>

        </div>

        <div className="row" style={{backgroundColor: '#00305b', marginBottom: '0px'}}>
          <div className="col s12 center-align">
            <i onClick={() => scroll.scrollToTop()} className="material-icons" style={{color: 'white', fontSize: '40px', lineHeight: '86px', cursor: 'pointer'}}>keyboard_arrow_up</i>
          </div>
        </div>

      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    galeryList: state.galeryList,
  };
};

export default connect(mapStateToProps, actions)(projectsPortafolio);
