import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
// import { Logo } from '../components/Logo'
import styles from '../css/footer.module.css'
import { LogoFooter } from '../components/LogoFooter'
export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col md={4}>
              {/* <Logo/> */}
              <LogoFooter/>
              {/* <p className="footer-content">
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
              </p>
              <p className="footer-copyright">
                ©Trafalgar PTY LTD 2020. All rights reserved
              </p> */}
            </Col>
            <Col md={2}>
              <div className="page-heading">Company</div>
              <ul className="page-elements">
                <li className="page-element">About</li>
                <li className="page-element">Testimonaials</li>
                <li className="page-element">Find a doctor</li>
                <li className="page-element">Apps</li>

              </ul>
            </Col>
            <Col md={2}>
            <div className="page-heading">Region</div>
              <ul className="page-elements">
                <li className="page-element">Indonesia</li>
                <li className="page-element">Singapore</li>
                <li className="page-element">Hongkong</li>
                <li className="page-element">Canada</li>

              </ul>
            </Col>
            <Col md={4}>
              <div className="page-heading">Help</div>
              {/* <ul className="page-elements">
                <li className="page-element">Help center</li>
                <li className="page-element">Contact support</li>
                <li className="page-element">Instructions</li>
                <li className="page-element">How it works</li>

              </ul> */}
              <div className="socials">
                <div className="socials__list">
                  <div className="socials__item">
                    
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          
        </Container>
     </footer>
    )
  }
}
