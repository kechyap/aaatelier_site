import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const Upcycle = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={4}>
        <h1> Upcyle Network </h1>
      </Col>
      <Col xs={12} md={4}>
        <p> Hand made fair 2017, winter </p>
      </Col>
      <Col xs={12} md={4}>
        <ul>
          <li>Exhibition for promoting enterpreneurs in the Upcycle industry </li>
          <li>Something</li>
          <li>Something</li>
        </ul>
      </Col>
    </Row>
  </Grid>
)

export default Upcycle
