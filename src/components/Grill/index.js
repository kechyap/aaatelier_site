import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'
import grillImage from './00.png'

const projects = [
  {
    Folder: 'Grill',
    Title: 'Grill Bag',
    Text: 'Mexican restaurant',

    photos: [
      { filename: 'menuU.svg', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: 'notAnImage', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: 'menuP.svg', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '01.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '02.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '06.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '07.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '05.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '04.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '08.png', break: { xs: 12, sm: 12, xl: 10 } },
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
]

const Grill = () => (
  <Grid fluid>
    {projects.map((project) =>
      <Row>
        <Col xs={12} md={4} xl={3}>

          <h3> {project.Title} </h3>
          <h4> {project.Text} </h4>
          <div className='category'>
            SOCIAL INOVATION BUSINESS, BRANDING, SPACE IDENTITY
          </div>

          <hr />

          <ul>
            <li> Completion Date - Oct, 2017 </li>
            <li> Design Planning - AAAtelier </li>
            <li> Construction - AAAtelier </li>
            <li> Signage - AAAtelier </li>
            <li> Photograph - AAAtelier </li>
            <li> Venue - Seoungsu, Seoul </li>
            <li> Client - MYSC </li>
            <li> Business Planning - MYSC </li>
          </ul>

          <hr />

          <h4> SUPPORTING </h4>
          <a href={'mysc.co.kr'}>
            MYSC
          </a>
          <br />
          <a href={'www.instagram.com/grillbag'} >
            Grill Bag
          </a>
          <br /> <br /> <br />
        </Col>

        <Col xs={12} md={8} xl={9} style={{padding: '0', margin: '0'}}>
          <Row>
            {project.photos.map((photo) =>
              <Col style={{padding: '0', margin: '0'}}
                xs={photo.break.xs}
                sm={photo.break.sm}
                xl={photo.break.xl}>
                {photo.filename === 'notAnImage' ? (
                  <svg viewBox='0 0 1800 994' xmlns='http://www.w3.org/2000/svg'>
                    <image xlinkHref={grillImage} height='994' width='1800' />
                    <g transform='translate(1395 382)'>
                      <circle className='st2' r='1'
                        style={{color: 'rgba(255,255,255,0.1)'}}>
                        <animateTransform
                          attributeType='xml'
                          attributeName='transform'
                          type='scale'
                          from='0'to='60'
                          begin='0s'
                          dur='1s'
                          repeatCount='indefinite' />
                      </circle>
                    </g>
                  </svg>

                ) : (

                  <img src={require(`../${project.Folder}/${photo.filename}`)} />
                )}
              </Col>
          )}
          </Row>
        </Col>
      </Row>
  )}
  </Grid>
)

export default Grill
