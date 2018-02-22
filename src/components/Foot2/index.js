// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'

// make Foot2 component
const Foot2 = () => (
  <div className='ending'>
    <Grid fluid>
      <Row>
        <Col xs={6} xsOffset={1} sm={4} mdOffset={0} md={4}>
          <h4 className='my-0 mx-0'>
            CONTACT
            AAAtelier
          </h4>
          <small className='pt-0 mx-0'>
            aaatelier @ ejay.kim
          </small>
        </Col>

        <Col xs={5} sm={7} md={8} className='pt-2 my-1'>
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

// export Foot2 component
export default Foot2
