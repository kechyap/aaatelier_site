// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'

// make TextIllustration component
const TextIllustration = () => (
  <div className='font-dosis text-align-centered'>
    <Grid>
      <Row>
        <Col xs={12}>
          <div className='show-xs-sm'>
            <img src={require('./images/logo_white.svg')} style={{ maxWidth: '11rem' }} />
          </div>

          <br />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4}>
          <div style={{ letterSpacing: '0.4em', paddingLeft: '0.4em' }}>
            ARCHITECTURE
          </div>

          <div style={{ letterSpacing: '0.17em', paddingLeft: '0.17em' }}>
            & URBAN PLANNING
          </div>

          <div style={{ letterSpacing: '0.062em', paddingLeft: '0.062em', color: '#EEE' }}>
            urban issue, social issue
          </div>

          <div style={{ letterSpacing: '0.062em', paddingLeft: '0.062em', color: '#EEE' }}>
            community, remodeling
          </div>

          <br />

          <div style={{ letterSpacing: '0.95em', paddingLeft: '0.95em' }}>
            INTERIOR
          </div>

          <div style={{ letterSpacing: '1.46em', paddingLeft: '1.46em' }}>
            DESIGN
          </div>

          <div style={{ letterSpacing: '0.001em', paddingLeft: '0.001em', color: '#EEE' }}>
            exhibition, furniture, display
          </div>

          <br />
        </Col>

        <Col xs={12} md={4}>
          <div className='hide-xs-sm'>
            <img src={require('./images/logo_white.svg')} style={{ maxWidth: '7rem', paddingTop: '2rem' }} />

            <div style={{ letterSpacing: '0.4em', paddingLeft: '0.4em' }}>
              BRAND
            </div>

            <div style={{ letterSpacing: '0.11em', paddingLeft: '0.11em' }}>
              IDENTITY
            </div>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div style={{ letterSpacing: '0.95em', paddingLeft: '0.95em' }}>
            ARTISTIC
          </div>

          <div style={{ letterSpacing: '0.55em', paddingLeft: '0.55em' }}>
            INSPIRATION
          </div>

          <div style={{ letterSpacing: '0.07em', paddingLeft: '0.07em', color: '#EEE' }}>
            illustration, photograph
          </div>

          <br />

          <div style={{ letterSpacing: '1.5em', paddingLeft: '1.5em' }}>
            VISUAL
          </div>

          <div style={{ letterSpacing: '1.5em', paddingLeft: '1.5em' }}>
            DESIGN
          </div>

          <div style={{ letterSpacing: '0.02em', paddingLeft: '0.02em', color: '#EEE' }}>
            signage, poster, publishing
          </div>

          <br />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={3} />
        <Col xs={12} md={6}>
          <div className='hide-xs-sm text-align-center'>
            <img src={require('./images/aboutFA.svg')} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

// export TextIllustration component
export default TextIllustration
