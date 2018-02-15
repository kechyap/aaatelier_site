import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import Foot from '../Foot'
import Grill from '../Grill'
import Upcycle from '../Upcycle'
import Pops from '../Pops'
import Seam from '../Seam'
import Tego from '../Tego'

const Home = () => (
  <div className='Home'>
    <div className='Front py-5'>
      <br />
      <br />
      <Grid fluid>
        <Row>
          <Col xs={4} sm={4} md={4} lg={4} xl={4}>
            <img
              src={require('./images/logo_pink.svg')}
              style={{ width: '6rem' }}
            />
          </Col>

          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <h2 className='py-0'>
              AAAtelier
            </h2>

            <h3 className='pt-0 pb-1 weight-400'>
              Art and Architecture Atelier
            </h3>

            <h4 className='py-0'>
              Total Design Solution
              <br />
              Spatial Identity Design
            </h4>
          </Col>
        </Row>
      </Grid>
      <br />
      <br />
    </div>

    <div className='py-1'>
      <Grill />
    </div>

    <div className='py-1'>
      <Upcycle />
    </div>

    <div className='py-1'>
      <Seam />
    </div>

    <div className='py-1'>
      <Tego />
    </div>

    <div className='py-1'>
      <Pops />
    </div>

    <Foot />
  </div>
)

export default Home
