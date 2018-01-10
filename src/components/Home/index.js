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
    date: 'february 2018',
    title: 'SEAM CENTER',
    text: 'co-working and co-living space ',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    photos: ['01.png', '02.png', '03.png', '04.png', '05.png']
  },
  {
    folder: 'Pops',
    date: '2017',
    title: 'P O P S FORUM',
    text: 'Private Owned Public Space',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    photos: ['01.png', '02.png', '03.png', '04.png']
  },
  {
    folder: 'Grill',
    date: 'august 2017',
    title: 'GRILL BAG',
    text: 'social issue, restaurant',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    photos: ['01.png', '02.png', '03.png', '04.png']
  },
  {
    folder: 'Grill',
    date: 'august 2017',
    title: 'GRILL BAG',
    text: 'social issue, restaurant',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    photos: ['01.png', '02.png', '03.png', '04.png']
  },
  {
    folder: 'Upcycle',
    date: 'December 2017',
    title: 'Upcycle Exhibition',
    text: 'Upcycle network exhibition',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    photos: ['00.svg', '01.png', '02.png', '03.png', '06.svg', '07.svg', '08.svg', '09.svg', '10.svg']
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
          <Col xs={12} md={4}>
            <h4>
              {project.title}
            </h4>
            <p>
            client - {project.client}
              <br />
            venue - {project.venue}
            </p>
            <p>
              {project.text}
            </p>
          </Col>

          <Col xs={12} md={8}>
            <Row>
              {project.photos.map((photo) =>
                <Col xs={12} sm={6}>
                  <img src={require(`../${project.folder}/${photo}`)} />
                  <br />
                  <br />
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
