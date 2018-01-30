import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const projects = [
  {
    Folder: 'Pops',
    Title: 'P.O.P.S',
    Text: 'Forum',

    photos: [
    { filename: '02.png', break: { xs: 12, sm: 12, xl: 10 } },
    { filename: '03.png', break: { xs: 12, sm: 6, xl: 5 } },
    { filename: '04.png', break: { xs: 12, sm: 6, xl: 5 } },
    { filename: '01.png', break: { xs: 12, sm: 6, xl: 5 } }
    ]
  }
]

const Pops = () => (
  <Grid fluid>
    {projects.map((project) =>
      <Row>
        <Col xs={12} md={4} xl={3}>

          <h3> {project.Title} </h3>
          <h4> {project.Text} </h4>
          <div className='category'>
            Sharing Solutions about P.O.P.S (Private Owned Public Space) forum, Improving Life though citizen innovation. <br />
            Event Planning, Reaserch, Forum, Booklets
          </div>

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
          <br /> <br /> <br /> <br />
        </Col>

        <Col xs={12} md={8} xl={9} style={{padding: '0', margin: '0'}}>
          <Row>
            {project.photos.map((photo) =>
              <Col style={{padding: '0', margin: '0'}}
                xs={photo.break.xs}
                sm={photo.break.sm}
                xl={photo.break.xl}>
                <img src={require(`../${project.Folder}/${photo.filename}`)} />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    )}
  </Grid>
)

export default Pops
