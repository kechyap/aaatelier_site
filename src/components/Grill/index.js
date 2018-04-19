// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

// import local files & components
import './index.css'

// make data
const project = {
  folder: 'Grill',
  title: 'Grill Bag',
  text: 'Mexican restaurant',

  photos: [
    { filename: 'menuU.svg', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: 'notAnImage', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: 'menuP.svg', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '01.jpg', break: { xs: 12, sm: 6, xl: 5 } },
    { filename: '02.jpg', break: { xs: 12, sm: 6, xl: 5 } },
    { filename: '06.jpg', break: { xs: 12, sm: 6, xl: 5 } },
    { filename: '07.jpg', break: { xs: 12, sm: 6, xl: 5 } },
    { filename: '05.jpg', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '03.jpg', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '04.jpg', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '08.jpg', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: 'menuD.svg', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '09.png', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '10.png', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '11.png', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '12.png', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: 'menuS.svg', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '131.png', break: { xs: 12, sm: 12, xl: 9 } },
    { filename: '13.png', break: { xs: 12, sm: 12, xl: 5 } },
    { filename: '14.png', break: { xs: 12, sm: 12, xl: 5 } }
  ]
}

// make Grill component
const Grill = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={12} md={4} xl={3}>
        <div className='px-1 pr-3 mt-0'>
          <h2>
            {/* <Link to='/grill'> */}
            {project.title}
            {/* </Link> */}
          </h2>

          <h4 className='mb-4'>
            {project.text}
          </h4>

          <small>
            SOCIAL INOVATION BUSINESS, BRANDING, SPACE IDENTITY
          </small>

          <hr />

          <ul>
            <li>Completion Date - Oct, 2017</li>
            <li>Design Planning - AAAtelier</li>
            <li>Construction - AAAtelier</li>
            <li>Signage - AAAtelier</li>
            <li>Photograph - AAAtelier</li>
            <li>Venue - Seoungsu, Seoul</li>
            <li>Client - MYSC</li>
            <li>Business Planning - MYSC</li>
          </ul>

          <hr />

          <h4>
            SUPPORTING
          </h4>

          <Link to='http://mysc.co.kr' target='_blank' rel='noopener noreferrer'>
            MYSC
          </Link>

          <br />

          <a href='www.instagram.com/grillbag' target='_blank' rel='noopener noreferrer'>
            Grill Bag
          </a>
        </div>
      </Col>

      <Col xs={12} sm={12} md={8} xl={9} className='no-pm'>
        <Row>
          {project.photos.map((photo) => (
            <Col xs={photo.break.xs} sm={photo.break.sm} xl={photo.break.xl} className='no-pm'>
              {photo.filename === 'notAnImage' ? (
                <svg viewBox='0 0 1800 994' xmlns='http://www.w3.org/2000/svg'>
                  <image xlinkHref={require('./images/00.jpg')} height='994' width='1800' />
                  <g transform='translate(1395 382)'>
                    <circle className='st2' r='1' style={{ color: 'rgba(255,255,255,0.1)' }}>
                      <animateTransform attributeType='xml' attributeName='transform' type='scale' from='0'to='60' begin='0s' dur='1s' repeatCount='indefinite' />
                    </circle>
                  </g>
                </svg>
              ) : (
                <img alt='' src={require(`./images/${photo.filename}`)} />
              )}
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Grid>
)

// export Grill component
export default Grill
