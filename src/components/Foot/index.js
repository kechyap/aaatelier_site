// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'

// make Foot component
const Foot = () => (
  <div className='ending'>
    <Grid fluid>
      <Row>
        <Col xs={7} className='pl-0 ml-0'>
          <h4 className='pb-0 pl-0 my-0'>
            CONTACT
            AAAtelier
          </h4>
          <small className='pt-0 pl-0'>
            aaatelier @ ejay.kim
          </small>
        </Col>

        <Col xs={5} className='pt-0 my-0'>
          <a href='mailto:aaatelier@ejay.kim'>
            <img alt='' src={require('./images/icon_email.svg')} className='icon' />
          </a>

          <a href='http://www.facebook.com/kechyap' target='_blank' rel='noopener noreferrer'>
            <img alt='' src={require('./images/icon_facebook.svg')} className='icon' />
          </a>

          <a href='http://www.linkedin.com/in/ejayk' target='_blank' rel='noopener noreferrer'>
            <img alt='' src={require('./images/icon_linkedin.svg')} className='icon' />
          </a>

          <a href='http://www.instagram.com/aaatelier_ejay' target='_blank' rel='noopener noreferrer'>
            <img alt='' src={require('./images/icon_insta.svg')} className='icon' />
          </a>
        </Col>
      </Row>
    </Grid>
  </div>
)

// export Foot component
export default Foot
