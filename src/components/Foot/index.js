import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const Foot = () => (
  <div className='ending'>
    <hr />

    <Grid>
      <Row>
        <Col xs={4.1} sm={4} md={3}>
          <h5>
            CONTACT AAAtelier
          </h5>

          <p>
            <a href='mailto:aaatelier@ejay.kim'>
              aaatelier@ejay.kim
            </a>
          </p>
        </Col>

        <Col xs={7.9} sm={8} md={7} >
          <a href='mailto:aaatelier@ejay.kim'>
            <img src={require('./images/icon_email.svg')} className='icon' />
          </a>

          <a href='http://www.facebook.com/kechyap' target='_blank'>
            <img src={require('./images/icon_facebook.svg')} className='icon' />
          </a>

          <a href='http://www.instagram.com/aaatelier_ejay' target='_blank'>
            <img src={require('./images/icon_insta.svg')} className='icon' />
          </a>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Foot
