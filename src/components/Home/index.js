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
    folder: 'Seam',
    date: 'february 2017',
    title: 'SEAM CENTER',
    text: 'co-working and co-living space ',
    client: '더작은재단',
    link: 'seam.center',
    venue: 'SETEC, Seoul',
    photos: [
      { filename: '01.png', break: { xs: 12, sm: 12, md: 6, lg: 6, xl: 5 } },
      { filename: '02.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '04.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '05.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } }
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
      { filename: '01.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
      { filename: '02.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
      { filename: '04.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } }
    ]
  },
  {
    folder: 'Grill',
    date: 'august 2017',
    title: 'GRILL BAG',
    text: 'social issue, restaurant',
    client: 'MYSC',
    link: 'mysc.co.kr',
    venue: 'Seoungsu, Seoul',
    photos: [
      { filename: '01.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
      { filename: '02.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
      { filename: '06.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
      { filename: '07.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
      { filename: '05.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '04.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '08.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } }
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
      { filename: '00.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
      { filename: '10.png', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
      { filename: '01.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '02.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '06.svg', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '07.svg', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } },
      { filename: '08.svg', break: { xs: 12, sm: 12, md: 12, lg: 12, xl: 10 } }
    ]
  }
]

const Home = () => (
  <div class='Home'>
    <div className='Front'>

      <Grid fluid>
        <Row>
          <Col xs={4} >
            <img src={logo_pink} style={{width: '5.5rem', margin: '1rem'}} />
          </Col>

          <Col xs={8}>
            <div>
              <h2 style={{marginTop: '0.5rem', color: 'rgba(255,200,190,1)'}}> AAAtelier </h2>

              <p style={{color: 'rgba(255,190,180,0.8)'}}>
                Art and Architecture Atelier
              </p>

              <p style={{display: 'top', marginTop: '-0.4rem'}}>
                Total Design Solution <br />
                Spatial Identity Design
              </p>

            </div>
          </Col>
        </Row>
      </Grid>
    </div>

    <Grid fluid>
      {projects.map((project) =>
        <Row>
          <Col xs={12} md={4} xl={3} style={{padding: '0'}}>
            <h3 style={{paddingLeft: '1rem', paddingTop: '2rem', marginBottom: '0.5rem'}}>
              {project.title}
            </h3>

            <p style={{paddingLeft: '1rem', marginTop: '-0.2rem'}}>
              {project.text}
            </p>

            <hr style={{margin: '0.5rem'}} />
            <ul style={{paddingLeft: '2rem'}}>

              <a href={project.link}>
                <li> Client - {project.client} </li>
              </a>

              <li> Venue - {project.venue} </li>
            </ul>

          </Col>

          <Col xs={12} md={8} xl={9} style={{paddingTop: '3rem'}}>
            <Row>
              {project.photos.map((photo) =>
                <Col xs={photo.break.xs} sm={photo.break.sm} md={photo.break.md} lg={photo.break.lg} xl={photo.break.xl}
                  style={{padding: '0', margin: '0'}}>
                  <img src={require(`../${project.folder}/${photo.filename}`)} />
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
