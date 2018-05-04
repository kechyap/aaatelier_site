// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'

// make data
const project = {
  folder: 'Upcycle',
  title: 'Upcycle Network',
  text: 'Exhibition',

  photos: [
    { filename: 'menuC.svg', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: '00.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '10.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: 'menuD.svg', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: '01.jpg', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: '02.jpg', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: '03.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: 'menuS.svg', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: '06.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: '07.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
    { filename: '08.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } }
  ]
}

// make Upcycle component
const Upcycle = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={4} xl={3}>
        <div className='px-1 pr-3 mt-0'>
          <h2>
            {project.title}
          </h2>

          <h4 className='mb-4'>
            {project.text}
          </h4>

          <small>
            Promoting enterpreneurs in upcycle industry.
          </small>

          <hr />

          <ul>
            <li>Completion Date - Dec, 2017</li>
            <li>Design Planning - AAAtelier</li>
            <li>Installation - AAAtelier</li>
            <li>Signage - AAAtelier</li>
            <li>Venue - SETEC, Seoul</li>
            <li>Client - Touch4good</li>
          </ul>

          <hr />

          <h4>
            SUPPORTING
          </h4>

          <a href='http://www.touch4good.com' target='_blank' rel='noopener noreferrer'>
            Touch4good
          </a>
        </div>
      </Col>

      <Col xs={12} md={8} xl={9} className='no-pm'>
        <Row>
          {project.photos.map((photo) => (
            <Col key={photo.filename} xs={photo.break.xs} sm={photo.break.sm} md={photo.break.md} lg={photo.break.lg} xl={photo.break.xl} className='no-pm'>
              <img alt='' src={require(`./images/${photo.filename}`)} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Grid>
)

// export Upcycle component
export default Upcycle
