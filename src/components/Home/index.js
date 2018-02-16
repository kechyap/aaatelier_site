// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import Foot from '../Foot'
import Grill from '../Grill'
import Upcycle from '../Upcycle'
import Pops from '../Pops'
import Seam from '../Seam'
import Tego from '../Tego'
import './index.css'

// make Home component
const Home = () => (
  <div className='Home'>
    <div className='front py-5'>
      <div className='py-4'>
        <Grid>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <img
                src={require('./images/logo_pink.svg')}
                style={{ width: '6.8rem', paddingTop: '1rem' }}
              />
            </Col>

            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <h2 className='no-pm'>
                AAAtelier
              </h2>

              <div className='subtitle py-1'>
                Art and Architecture Atelier
              </div>

              <div className='subsubtitle py-0'>
                Total Design Solution
                <br />
                Spatial Identity Design
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
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

    <hr />
    <Foot />
  </div>
)

// export Home component
export default Home
