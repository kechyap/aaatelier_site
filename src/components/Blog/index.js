// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'
import Writing1 from './blogWritings/Writing1/index.js'
import Writing2 from './blogWritings/Writing2/index.js'
import Foot from '../Foot'

// make data
// make Upcycle component
const Blog = () => (
  <div className='Blog'>
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <div className='py-5 px-1'>
            <h1> CREATIVE SPACE <br />
                 IN THE WORLD!!!
            </h1>
          </div>
        </Col>
      </Row>
    </Grid>

    <div className='py-1'>
      <Writing1 />
    </div>

    <div className='py-1'>
      <Writing2 />
    </div>

    <hr />
    <Foot />
  </div>
)

export default Blog
