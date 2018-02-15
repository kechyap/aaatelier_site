import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import iconEmail from '../About/icon_email.svg'
import iconFacebook from '../About/icon_facebook.svg'
import iconInsta from '../About/icon_insta.svg'

const Foot = () => (
  <div className='ending'>
    <hr />

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
)

export default Foot
