import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Parallax from './Parallax';
import Servicios from './Servicios';
import Proyectos from './Proyectos';
import QuienesSomos from './QuienesSomos';

class Main extends Component {

  render(){
      return(
        <div>

          <nav>
            <div className="nav-wrapper">
              <Link style={{cursor: 'pointer'}} className="brand-logo" to="parallax" spy={true} smooth={true} duration={500} isDynamic={true}>
                Logo
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="test1" spy={true} smooth={true} offset={-64} duration={500} isDynamic={true}> {/* 64 tamaño de navbar */}
                    servicios
                  </Link>
                </li>
                <li>
                  <Link to="test2" spy={true} smooth={true} duration={500} isDynamic={true}>
                    quienes somos
                  </Link>
                </li>
                <li>
                  <Link to="test3" spy={true} smooth={true} duration={500} isDynamic={true}>
                    nuestro equipo
                  </Link>
                </li>
                <li>
                  <Link to="test4" spy={true} smooth={true} duration={500} isDynamic={true}>
                    proyectos
                  </Link>
                </li>
                <li>
                  <Link to="test5" spy={true} smooth={true} duration={500} isDynamic={true}>
                    contacto
                  </Link>
                </li>
                <li><a>portal clientes</a></li>
              </ul>
            </div>
          </nav>

          <Element name="parallax">
            <Parallax />
          </Element>
          <Element name="test1" className="element">
            <Servicios />
          </Element>
          <Element name="test2" className="element" style={{height: '700px'}}>
            <Proyectos />
          </Element>
          <Element name="test3" className="element" style={{backgroundColor: '#00305b', color: 'white', height: '700px'}}>
            <QuienesSomos />
          </Element>
          <Element name="test4" className="element">
            test 2
          </Element>
          <Element name="test5" className="element">
            test 2
          </Element>

        </div>
      );
    }
};

export default connect(null)(Main);
