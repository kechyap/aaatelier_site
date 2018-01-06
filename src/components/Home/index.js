import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

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
)

export default Home
