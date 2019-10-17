// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import Foot from '../Foot'
import Grill from '../Grill'
import Pops from '../Pops'
import Seam from '../Seam'
import Tego from '../Tego'
import Upcycle from '../Upcycle'
import MaterialBank from '../MaterialBank'
import './index.css'

// make Home component
const Home = () => (
  <div className='Home'>
    <div className='front'>
      <div className='pt-5'>
        <Grid fluid>
          <Row className='pt-2'>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <img
                alt=''
                src={require('./images/logo_pink.svg')}
                style={{ width: '6.5rem', paddingTop: '0.5rem' }}
              />
            </Col>

            <Col xs={8} sm={8} md={8} lg={8} xl={8}>
              <h2 className='no-pm'>AAAtelier</h2>

              <div className='subtitle'>Art & Architecture Atelier</div>

              <div className='subsubtitle'>Total Design Solution</div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>

    <div className='pb-1'>
      <Grill />
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

    <div className='py-1'>
      <Upcycle />
    </div>

    <div className='py-1'>
      <MaterialBank />
    </div>
    <hr />

    <Foot />
  </div>
)

// export Home component
export default Home
