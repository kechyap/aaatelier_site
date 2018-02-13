import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import Grill from '../Grill/index.js'
import Upcycle from '../Upcycle/index.js'
import Pops from '../Pops/index.js'
import Seam from '../Seam/index.js'
import Tego from '../Tego/index.js'

import logo_pink from '../../images/logo_pink.svg'

import grillImage from '../Grill/00.png'

import iconEmail from '../About/icon_email.svg'
import iconFacebook from '../About/icon_facebook.svg'
import iconInsta from '../About/icon_insta.svg'

const Home = () => (
  <div className='Home'>
    <div className='Front'>

      <Grid fluid>
        <Row style={{ paddingTop: '3rem'}}>
          <Col xs={4} >
            <img className='logo_pink' src={logo_pink} />
          </Col>

          <Col xs={8}>
            <div>
              <h2> AAAtelier </h2>

              <div className='subtitle'>
                Art and Architecture Atelier
              </div>

              <div className='subsubtitle'>
                Total Design Solution <br />
                Spatial Identity Design
              </div>

            </div>
          </Col>
        </Row>
      </Grid>
    </div>

    <Grill />
    <br /> <br /> <br /> <br /> <br />
    <Upcycle />
    <br /> <br /> <br /> <br /> <br />
    <Seam />
    <br /> <br /> <br /> <br /> <br />
    <Tego />
    <br /> <br /> <br /> <br /> <br />
    <Pops />
    <br /> <br /> <br /> <br /> <br />

    <hr style={{paddingTop: '1rem'}} />

    <div className='ending'>
      <Grid fluid>
        <Row>
          <Col xs={4.1} sm={4} md={3}>
             CONTACT AAAtelier
            <p style={{height: '0.9rem', marginTop: '0.3rem'}}>
             aaatelier @ ejay.kim
           </p>
          </Col>

          <Col xs={7.9} sm={8} md={7} >
            <a href='aaatelier@ejay.kim'>
              <img src={iconEmail} className='icon' />
            </a>
            <a href='www.facebook.com/kechyap'>
              <img src={iconFacebook} className='icon' />
            </a>
            <a href='www.instagram.com/aaatelier_ejay'>
              <img src={iconInsta} className='icon' />
            </a>
          </Col>
        </Row>
      </Grid>
    </div>

  </div>
)

export default Home
