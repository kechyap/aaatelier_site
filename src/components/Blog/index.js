// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'


// import local files & components
import Heyground from './blogWritings/w01_heyground'
import Punspace from './blogWritings/w02_punspace'
import Beachub from './blogWritings/w03_beachub'
import Scoopoint from './blogWritings/w04_scoopoint'
import Cat from './blogWritings/w05_cat'

import Foot from '../Foot'
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
      <Heyground />
      <Punspace />
      <Beachub />
      <Scoopoint />
      <Cat />
      <hr />
      <Foot />
    </div>

  </div>
)

export default Blog
