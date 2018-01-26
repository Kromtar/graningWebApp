import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ProjectDetail extends Component {

  componentDidMount(){
    $('#collapsible').collapsible();
  }

  dateFormat(dateIn){
    const mydate = new Date(dateIn);
    return mydate.toLocaleDateString('en-GB');
  }

  renderCollapsible(){
    if(typeof(this.props.projectDetail._stage) !== "undefined"){
      if(this.props.projectDetail._stage.length > 0){
        return (
          <ul id="collapsible" className="collapsible popout" data-collapsible="accordion" >
            {this.renderProjectStage()}
          </ul>
        );
      }
    }
    return <blockquote><p>Este proyecto aun no tiene etapas</p></blockquote>;
  }

  renderProjectStage(){
    return _.map(this.props.projectDetail._stage, stage => {
      return (
          <li key={stage._id} style={{borderStyle: 'solid', borderWidth: '2px', borderColor: '#0066cc'}}>
            <div className="collapsible-header" style={{borderBottomColor: '#0066cc'}}><i className="material-icons">device_hub</i>{stage.name}</div>
            <div className="collapsible-body">
              <div
                className="row z-depth-1"
                style={{
                  paddingTop: '6px',
                  marginBottom: '0px',
                  borderStyle: 'solid',
                  borderColor: '#00305b',
                  borderWidth: '1px',
                  borderRadius: '10px'
                }}
              >
                {this.renderProjectRev(stage)}
              </div>
            </div>
          </li>
      );
    });
  }

  renderProjectRev(stage){
    if(stage._review.length > 0){
      return _.map(stage._review, review => {
        return (
          <div key={review._id}>
            <div className="col s2">
             <p>
               <i className="material-icons left" style={{marginRight: '8px'}}>view_quilt</i>
               <b>{review.name}</b>
             </p>
           </div>
           <div className="col s5">
             <p>Fecha entrega: {review.companytoclientdate ? this.dateFormat(review.companytoclientdate) : 'Fecha pendiente'}</p>
           </div>
           <div className="col s5">
             <p>Fecha correccion: {review.clienttocompany ? this.dateFormat(review.clienttocompany) : 'Fecha pendiente'}</p>
           </div>
         </div>
        );
      });
    } else {
      return <blockquote><p>Esta etapa aun no tiene ninguna revisión</p></blockquote>;
    }
  }

  renderDocumentSection(){
    if(this.props.projectDetail.filename){
      return (
        <div className="row">
          <div className="col s4">
            Nombre del último archivo disponible: {this.props.projectDetail.filename}
          </div>
          <div className="col s8 center-align">
            <a
              href={this.props.projectDetail.url}
              target="_blank"
              className="waves-effect btn"
              style={{backgroundColor: '#ff6600'}}>
              Descargar
              <i className="material-icons right">cloud_download</i>
            </a>
          </div>
        </div>
      );
    }else{
      return <blockquote><p>No hay documentos en este proyecto actualmente</p></blockquote>;
    }
  }

  render(){

    return(
      <div className="container" style={{ marginTop:  '30px', whidth: '85% !important'}}>

        {/* Titulo */}
        <div className="card">
          <div className="card-content white-text" style={{paddingBottom: '2px', paddingTop: '10px', backgroundColor: '#0066cc'}}>
            <span className="card-title">
              <i onClick={() => this.props.openListWindow()} className="material-icons left" style={{cursor: 'pointer'}}>arrow_back</i>
              Detalles del Proyecto Nº {this.props.projectDetail.proyectnumber}
              <i className="material-icons right">insert_drive_file</i>
            </span>
          </div>
        </div>

        {/* General */}
        <div
          className="row z-depth-3"
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            borderColor: '#00305b',
            borderRadius: '12px',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >

          <div className="col s6">
            <p><b>Nombre:  </b>{this.props.projectDetail.name}</p>
            <p><b>Nº Proyecto:  </b>{this.props.projectDetail.proyectnumber}</p>
            <p><b>Nº Contrato:  </b>{this.props.projectDetail.contractnumber}</p>
            <p><b>Nº Orden de compra:  </b>{this.props.projectDetail.purchaseordernumber}</p>
          </div>
          <div className="col s6">
            <p><b>Fecha inicio proyecto:  </b>{this.props.projectDetail.openprojectdate ? this.dateFormat(this.props.projectDetail.openprojectdate) : 'Pendiente'}</p>
            <p><b>Fecha cierre proyecto:  </b>{this.props.projectDetail.closeprojectdate ? this.dateFormat(this.props.projectDetail.closeprojectdate) : 'Pendiente'}</p>
            <p><b>Plazo (en días):  </b>{this.props.projectDetail.term}</p>
          </div>

        </div>

        {/* Ficheros */}
        <div
          className="row z-depth-3"
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            paddingTop: '6px',
            borderColor: '#00305b',
            borderRadius: '12px',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >

          <div className="col s12">
          <p><b>Documentos del proyecto:</b></p>
          <div className="divider" style={{marginBottom: '5px'}}></div>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
              {this.renderDocumentSection()}
            </div>
          </div>

        </div>

        {/* Etapas */}
        <div
          className="row z-depth-3"
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            paddingTop: '6px',
            borderColor: '#00305b',
            borderRadius: '12px',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >

          <div className="col s12">
          <p><b>Avance del proyecto:</b></p>
          <div className="divider" style={{marginBottom: '5px'}}></div>
            {this.renderCollapsible()}
          </div>

        </div>

      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    projectDetail: state.projectDetail,
  };
};

export default connect(mapStateToProps, actions)(ProjectDetail);
