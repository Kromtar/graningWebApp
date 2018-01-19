import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ReactTable from 'react-table';

import tableProjectsUserColumns from './tableProjectsUserColumns';

class ProjectList extends Component {

  componentDidMount(){
    if(this.props.loginUserStatus.status){
      this.props.getClientDetail(this.props.loginUserStatus.token, this.props.loginUserStatus.userId);
    }
  }

  render(){

    const data = this.props.clientDetail._projects;

    if(tableProjectsUserColumns.length === 7){
      tableProjectsUserColumns.pop();
    }

    if(tableProjectsUserColumns.length <= 6){
      tableProjectsUserColumns.push({
        Heder: 'Button',
        maxWidth: 120,
        accessor: '_id',
        sortable: false,
        filterable: false,
        Cell: row => (
          <a
            onClick={() => {
              this.props.getProjectDetail(this.props.loginUserStatus.token, row.value);
            }}
            className="waves-effect waves-light btn"
            style={{
              color: '#fff',
              height: '25px',
              lineHeight: '26px',
              padding: '0 0.5rem',
              fontSize: 'small',
              backgroundColor: '#3399ff'
            }}>
            <i style={{marginLeft: '8px'}} className="material-icons right">visibility</i>
            Ver mas
          </a>
        )}
      );
    }

    return(
      <div className="container" style={{ marginTop:  '30px', whidth: '85% !important'}}>

        {/* Titulo */}
        <div className="card">
          <div className="card-content white-text" style={{paddingBottom: '2px', paddingTop: '10px', backgroundColor: '#0066cc'}}>
            <span className="card-title">
              Tus Proyectos
              <i className="material-icons right">library_books</i>
            </span>
          </div>
        </div>

        {/*TODO: El selector de columnos no se despliega*/}
        {/* Tabla */}
        <ReactTable
          data={data}
          columns={tableProjectsUserColumns}
          defaultPageSize = {12}
          filterable
          noDataText="No hay datos :("
          className="-striped -highlight"
          previousText='Anterior'
          nextText= 'Próximo'
          loadingText= 'Cargando...'
          pageText= 'Página'
          ofText= 'de'
          rowsText= 'filas'
          showPageSizeOptions = {false}
        />

      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    loginUserStatus: state.loginUserStatus,
    clientDetail: state.clientDetail
  };
};

export default connect(mapStateToProps, actions)(ProjectList);
