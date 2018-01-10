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
    color: 'rgba(255, 255, 255, 0.9)',
    photos: ['01', '02', '03', '04', '05']
  },
  {
    folder: 'Pops',
    date: '2017',
    title: 'P O P S FORUM',
    text: 'Private Owned Public Space',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    color: 'rgba(255, 255, 255, 0.9)',
    photos: ['01', '02', '03', '04']
  },
  {
    folder: 'Grill',
    date: 'august 2017',
    title: 'GRILL BAG',
    text: 'social issue, restaurant',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    color: 'rgba(255, 255, 255, 0.9)',
    photos: ['01', '02', '03', '04']
  },
  {
    folder: 'Grill',
    date: 'august 2017',
    title: 'GRILL BAG',
    text: 'social issue, restaurant',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    color: 'rgba(255, 255, 255, 0.9)',
    photos: ['01', '02', '03', '04']
  },
  {
    folder: 'Upcycle',
    date: 'December 2017',
    title: 'Upcycle Exhibition',
    text: 'Upcycle network exhibition',
    client: 'touch4good',
    venue: 'SETEC, Seoul',
    color: 'rgba(255, 255, 255, 0.9)',
    photos: ['01', '02', '03']
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
              <h2 style={{marginTop: '1rem', color: 'rgba(255,200,190,1)'}}> AAAtelier </h2>

              <p style={{color: 'rgba(255,190,180,0.8)'}}>
                Art and Architecture Atelier
              </p>

              <p style={{display: 'top', color: 'rgba(255,170,160,1)', marginTop: '-0.3rem'}}>
                Design Solution, Spatial Design Identity
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
            <h4 style={{color: project.color}}>
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
                  <img src={require(`../${project.folder}/${photo}.png`)} />

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
