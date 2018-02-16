// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'

// make Error component
const Error = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h1>Error</h1>
      </Col>
    </Row>
  </Grid>
)

// export Error component
export default Error
