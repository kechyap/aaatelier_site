import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import logo_pink from '../../images/logo_pink.svg'
import iconEmail from '../../images/icon_email.svg'
import iconFacebook from '../../images/icon_facebook.svg'
import iconInsta from '../../images/icon_insta.svg'
import iconKakao from '../../images/icon_kakao.svg'

const projects = [

  {
    folder: 'Grill',
    date: 'august 2017',
    title: 'GRILL BAG',
    text: 'social issue, restaurant',
    client: 'MYSC',
    link: 'mysc.co.kr',
    venue: 'Seoungsu, Seoul',
    photos: [
      { filename: 'notAnImage', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '02.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '06.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '07.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '05.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '04.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '08.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '09.svg', break: { xs: 12, sm: 12, xl: 10 } }
    ]
  },

  {
    folder: 'Upcycle',
    date: 'December 2017',
    title: 'Upcycle Exhibition',
    text: 'Upcycle network exhibition',
    client: 'touch4good',
    link: 'www.google.com',
    venue: 'SETEC, Seoul',
    photos: [
      { filename: '00.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '10.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '01.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '02.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '06.svg', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '07.svg', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '08.svg', break: { xs: 12, sm: 12, xl: 10 } }
    ]
  },

  {
    folder: 'Pops',
    date: '2017',
    title: 'P.O.P.S FORUM',
    text: 'Private Owned Public Space',
    client: 'touch4good',
    link: 'www.google.com',
    venue: 'SETEC, Seoul',
    photos: [
      { filename: '01.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '02.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '04.png', break: { xs: 12, sm: 6, xl: 5 } }
    ]
  },

  {
    folder: 'Seam',
    date: 'february 2017',
    title: 'SEAM CENTER',
    text: 'co-working and co-living space ',
    client: '더작은재단',
    link: 'seam.center',
    venue: 'SETEC, Seoul',
    photos: [
      { filename: '01.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '02.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '04.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '05.png', break: { xs: 12, sm: 6, xl: 5 } }
    ]
  }

]

const Home = () => (
  <div className='Home'>
    <div className='Front'>

      <Grid fluid>
        <Row style={{ paddingTop: '4rem'}}>
          <Col xs={4} >
            <img className='logo_pink' src={logo_pink} />
          </Col>

          <Col xs={8}>
            <div>
              <h2> AAAtelier </h2>

              <div className='subtitle'>
                Art and Architecture Atelier
              </div>

              <div className='subsubtitle'>
                Total Design Solution <br />
                Spatial Identity Design
              </div>

            </div>
          </Col>
        </Row>
      </Grid>
    </div>

    <Grid fluid>
      {projects.map((project) =>
        <Row>
          <Col xs={12} md={4} xl={3}>

            <h3> {project.title} </h3>
            <p> {project.text} </p>

            <hr />

            <ul>
              <a href={project.link}>
                <li> Client - {project.client} </li>
              </a>
              <li> Venue - {project.venue} </li>
            </ul>

          </Col>

          <Col xs={12} md={8} xl={9} style={{padding: '0', margin: '0'}}>
            <Row>
              {project.photos.map((photo) =>
                <Col style={{padding: '0', margin: '0'}}
                  xs={photo.break.xs}
                  sm={photo.break.sm}
                  xl={photo.break.xl}>
                  {photo.filename == 'notAnImage' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="40" viewBox="0 0 500 40">
                      <text x="0" y="35" font-family="Verdana" font-size="35">
                        I AM SVG OMG YAY
                      </text>
                    </svg>
                  ) : (
                    <img src={require(`../${project.folder}/${photo.filename}`)} />
                  )}
                </Col>
            )}
            </Row>
          </Col>
        </Row>
    )}
    </Grid>
  </div>
)

export default Home
