import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import Grill from '../Grill'
import Upcycle from '../Upcycle'
import Pops from '../Pops'
import Seam from '../Seam'
import Tego from '../Tego'

const Home = () => (
  <div className='Home'>
    <div className='Front vertical-space'>
      <Grid>
        <Row>
          <Col xs={2}>
            <img
              src={require('./images/logo_pink.svg')}
              style={{ paddingTop: '1.3rem' }}
            />
          </Col>

          <Col xs={2} />

          <Col xs={8}>
            <h2>
              AAAtelier
            </h2>

            <h4>
              Art and Architecture Atelier
            </h4>

            <h6>
              Total Design Solution
              <br />
              Spatial Identity Design
            </h6>
          </Col>
        </Row>
      </Grid>
    </div>

    <div className='vertical-space'>
      <Grill />
    </div>

    <div className='vertical-space'>
      <Upcycle />
    </div>

    <div className='vertical-space'>
      <Seam />
    </div>

    <div className='vertical-space'>
      <Tego />
    </div>

    <div className='vertical-space'>
      <Pops />
    </div>
  </div>
)

export default Home
