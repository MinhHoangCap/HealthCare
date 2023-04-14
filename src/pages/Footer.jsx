// import React, { Component } from 'react'
// import {Container, Row, Col} from 'react-bootstrap'

// // import Container from 'react-bootstrap/Container'
// // import Row from 'react-bootstrap/Row'
// // import Col from 'react-bootstrap/Col'

// export const Footer = () => {
//   return (
//     <footer className='footer'>
//         <Container>
//       <Row>
//         <Col>1 of 3</Col>
//         <Col xs={6}>2 of 3 (wider)</Col>
//         <Col>3 of 3</Col>
//       </Row>
//       <Row>
//         <Col>1 of 3</Col>
//         <Col xs={5}>2 of 3 (wider)</Col>
//         <Col>3 of 3</Col>
//       </Row>
//     </Container>
//     </footer>
//   )
// }
import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Logo } from '../components/Logo'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col md={6}>
              <Logo/>
                <p className="footer-content">
                  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                </p>
                <p className="footer-copyright">
                  ©Trafalgar PTY LTD 2020. All rights reserved
                </p>
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
            <Col md={2}><div className="page-heading">Help</div>
              <ul className="page-elements">
                <li className="page-element">Help center</li>
                <li className="page-element">Contact support</li>
                <li className="page-element">Instructions</li>
                <li className="page-element">How it works</li>

              </ul>
            </Col>
          </Row>
          
        </Container>
     </footer>
    )
  }
}
