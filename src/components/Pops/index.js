import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const project = {
  Folder: 'Pops',
  Title: 'P.O.P.S',
  Text: 'Forum',

  photos: [
  { filename: 'menuP.svg', break: { xs: 12, sm: 12, xl: 10 } },
  { filename: '01.jpg', break: { xs: 12, sm: 12, xl: 10 } },
  { filename: '02.jpg', break: { xs: 12, sm: 6, xl: 5 } },
  { filename: '03.jpg', break: { xs: 12, sm: 6, xl: 5 } },
  { filename: 'menuF.svg', break: { xs: 12, sm: 12, xl: 10 } },
  { filename: 's2.jpg', break: { xs: 12, sm: 12, xl: 10 } },
  { filename: 's0.jpg', break: { xs: 6, sm: 6, xl: 5 } },
  { filename: 'p1.jpg', break: { xs: 6, sm: 6, xl: 5 } },

  { filename: 'p3.jpg', break: { xs: 6, sm: 6, xl: 5 } },
  { filename: 'p4.jpg', break: { xs: 6, sm: 6, xl: 5 } },

  { filename: '05.jpg', break: { xs: 6, sm: 6, xl: 5 } },
  { filename: '04.jpg', break: { xs: 6, sm: 6, xl: 5 } },
  { filename: '00.jpg', break: { xs: 12, sm: 12, xl: 10 } },
  { filename: 'menuB.svg', break: { xs: 12, sm: 12, xl: 10 } },
  { filename: '07.jpg', break: { xs: 12, sm: 12, xl: 10 } },
  { filename: '08.jpg', break: { xs: 12, sm: 12, xl: 10 } }

  ]
}

const Pops = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={4} xl={3}>
        <div className='py-2 px-1'>
          <h3> {project.Title} </h3>
          <h4> {project.Text} </h4>
          <p>
            Event Planning, Reaserching, Booklets.
            <br />
            Sharing Solutions about P.O.P.S (Private Owned Public Space) forum, Improving Urban Life quaility though citizen innovation.
          </p>

          <hr />

          <ul>
            <li> Completion Date - Dec, 2016 </li>
            <li> Planning - AAAtelier, Urban Society, 00UNIV. </li>
            <li> Graphic Design - AAAtelier </li>
            <li> Venue - Gyeongui Railway Park, Seoul </li>
            <li> Business Planning - AAAtelier, Urban Society </li>
            <li> Client - Seoul Metropolitan Government </li>
          </ul>

          <hr />

          <h4> SUPPORTING </h4>
          <a href={'oouniv.org'}>
            00UNIV
          </a>
          <br />
          <a href={project.ProjectLink} >
            {project.Title}
          </a>
        </div>
      </Col>

      <Col xs={12} md={8} xl={9} className='no-pm'>
        <Row>
          {project.photos.map((photo) =>
            <Col xs={photo.break.xs} sm={photo.break.sm} xl={photo.break.xl} className='no-pm'>
              <img src={require(`./images/${photo.filename}`)} />
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default Pops
