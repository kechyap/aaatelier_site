// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import './index.css'

// make data
const project = {
  folder: 'MaterialBank',
  title: 'Material Bank',
  text: 'Brand Identity design',

  photos: [
    { filename: '01.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 5 } },
    { filename: '03.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 5 } },
    { filename: '02.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 5 } },
    { filename: '04.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 5 } },
    { filename: '05.jpg', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: '06.jpg', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: '07.jpg', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: '09.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: '10.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: '12.jpg', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: '13.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: '14.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
    { filename: '15.png', break: { xs: 12, sm: 12, md: 12, lg: 10, xl: 10 } },
  ],
}

// make Upcycle component
const MaterialBank = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={4} xl={3}>
        <div className='px-1 pr-3 mt-0'>
          <h2>{project.title}</h2>

          <h4 className='mb-4'>{project.text}</h4>

          <small>Promoting enterpreneurs in upcycle industry.</small>

          <hr />

          <ul>
            <li>Completion Date - Dec, 2018</li>
            <li>Design Planning - AAAtelier</li>
            <li>Client - Seoul Upcycle Plaza</li>
          </ul>

          <hr />

          <h4>SUPPORTING</h4>

          <a
            href='http://http://www.seoulup.or.kr'
            target='_blank'
            rel='noopener noreferrer'
          >
            Seoul Upcycle Plaza
          </a>
        </div>
      </Col>

      <Col xs={12} md={8} xl={9} className='no-pm'>
        <Row>
          {project.photos.map(photo => (
            <Col
              xs={photo.break.xs}
              sm={photo.break.sm}
              md={photo.break.md}
              lg={photo.break.lg}
              xl={photo.break.xl}
              className='no-pm'
            >
              <img alt='' src={require(`./images/${photo.filename}`)} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Grid>
)

// export Upcycle component
export default MaterialBank
