import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const TextIllustration = () => (
  <div className='font-dosis text-align-centered'>
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <div className='show-xs-sm'>
            <img src={require('./images/logo_white.svg')} style={{ maxWidth: '11rem' }} />
          </div>
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
        </Col>

        <Col xs={12} md={4}>
          <div className='hide-xs-sm'>
            <img src={require('./images/logo_white.svg')} style={{ maxWidth: '11rem' }} />

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
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={2} />

        <Col xs={12} md={8}>
          <img src={require('./images/aboutFA.svg')} />
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TextIllustration
