import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link, Element } from 'react-scroll'

import Zoom  from 'react-reveal/Zoom';
import ScrollingColorBackground from 'react-scrolling-color-background';

import Parallax from './Parallax';
import Servicios from './Servicios';
import Proyectos from './Proyectos';
import QuienesSomos from './QuienesSomos';
import Clientes from './Clientes';
import Equipo from './Equipo';

import logo from '../media/photos/logo.png';

class Main extends Component {

  render(){
      return(
        <div>
          <nav>
            <div className="nav-wrapper">
              <Link style={{cursor: 'pointer'}} className="brand-logo" to="parallax" spy={true} smooth={true} duration={500} isDynamic={true}>
                <Zoom><img src={logo} style={{height: '88px', marginLeft: '20px'}}/></Zoom>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="test1" spy={true} smooth={true} offset={-88} duration={500} isDynamic={true}> {/* 64 tamaño de navbar */}
                    SERVICIOS
                  </Link>
                </li>
                <li>
                  <Link to="test2" spy={true} smooth={true} offset={-130} duration={500} isDynamic={true}>
                    PROYECTOS
                  </Link>
                </li>
                <li>
                  <Link to="test3" spy={true} smooth={true} offset={-70} duration={500} isDynamic={true}>
                    QUIENES SOMOS
                  </Link>
                </li>
                <li>
                  <Link to="test4" spy={true} smooth={true} offset={-30} duration={500} isDynamic={true}>
                    EQUIPO
                  </Link>
                </li>
                <li>
                  <Link to="test5" spy={true} smooth={true} duration={500} isDynamic={true}>
                    CONTACTO
                  </Link>
                </li>
                <li><a>PORTAL CLIENTES</a></li>
              </ul>
            </div>
          </nav>


          <ScrollingColorBackground
            selector='.js-color-stop[data-background-color]'
            colorDataAttribute='data-background-color'
            initialRgb='rgb(0, 0, 0)'
            style={{
              zIndex: '-150',
              position: 'fixed',
              top: '0px',
              left: '0px',
              bottom: '0px',
              right: '0px'
            }}
          />

          <section data-background-color='rgb(51, 153, 255)' className='js-color-stop'>
            <Element name="parallax">
              <Parallax />
            </Element>
          </section>

          <section data-background-color='rgb(26, 100, 173)' className='js-color-stop'>
            <Element name="test1" className="element">
              <Servicios />
            </Element>
          </section>

          <section data-background-color='rgb(13, 74, 132)' className='js-color-stop'>
            <Element name="test2" className="element" style={{color: 'white'}}>
              <Proyectos />
            </Element>
          </section>

          <section data-background-color='rgb(0, 48, 91)' className='js-color-stop'>
            <Element name="test3" className="element" style={{ color: 'white'}}>
              <QuienesSomos />
              <Clientes />
            </Element>
          </section>

          <section data-background-color='rgb(13, 74, 132)' className='js-color-stop'>
            <Element name="test4" className="element">
              <Equipo />
            </Element>
          </section>

          <section data-background-color='rgb(26, 100, 173)' className='js-color-stop'>
            <Element name="test5" className="element" style={{height: '600px'}}>
              CONTACTO
            </Element>
          </section>
        </div>
      );
    }
};

export default connect(null)(Main);
