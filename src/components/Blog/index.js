// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

// import local files & components
import Writing1 from './blogWritings/Writing1'
import Writing2 from './blogWritings/Writing2'
import './index.css'

// make App component
const Blog = () => (
  <div className='Blog'>

    <Grid fluid>
      <Row>
        <Col xs={12} sm={5}>
          <div className='py-3'>
            <br /><br /><br />
            <h1>
              Creative Space <br />
              over the world
            </h1>
          </div>
        </Col>
      </Row>
    </Grid>

    <div>
      <Writing1 />
    </div>

    <div>
      <Writing2 />
    </div>
  </div>
)

export default Blog
