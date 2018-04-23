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
        <Col xs={6} sm={4} className='pl-1 ml-0'>
          <h4 className='pb-0 my-0'>
            C O N T A C T <br/>
            A A A t e l i e r
          </h4>
          <small>
            aaatelier@ejay.kim
          </small>
        </Col>

        <Col xs={6} sm={8} className='pt-0 my-0'>
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
