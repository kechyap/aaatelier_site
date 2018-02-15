// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'

// make Foot component
const Foot = () => (
  <div className='ending'>
    <hr />

    <Grid>
      <Row>
        <Col xs={4.1} sm={4} md={3}>
          <h4>
            CONTACT AAAtelier
          </h4>
          <a href='mailto:aaatelier@ejay.kim'>
            aaatelier@ejay.kim
          </a>
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

// export Foot component
export default Foot
