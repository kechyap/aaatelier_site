import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const Seam = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={4}>
        <h1>Seam</h1>
      </Col>
      <Col xs={12} md={4}>
        <p>Some text about project</p>
      </Col>
      <Col xs={12} md={4}>
        <ul>
          <li>Something</li>
          <li>Something</li>
          <li>Something</li>
        </ul>
      </Col>
    </Row>
  </Grid>
)

export default Seam
