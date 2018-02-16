// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'

// make Foot component
const Foot = () => (
  <div className='ending'>

    <Grid>
      <hr />
      <Row className='py-2'>
        <Col xs={5} xsOffset={1} md={4} mdOffset={0}>
          <h4 className='pb-0'>
            CONTACT AAAtelier
          </h4>
          <small>
            aaatelier @ ejay.kim
          </small>
        </Col>

        <Col xs={6} md={7} className='pt-2'>
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
