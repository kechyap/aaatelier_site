import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const projects = [
  {
    Folder: 'Upcycle',
    Title: 'Upcycle Network',
    Text: 'Exhibition',

    photos: [
      { filename: 'menuC.svg', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '00.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: '10.png', break: { xs: 12, sm: 6, xl: 5 } },
      { filename: 'menuD.svg', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '01.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '02.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: 'menuS.svg', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '06.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '07.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '08.png', break: { xs: 12, sm: 12, xl: 10 } }
    ]
  }
]

const Upcycle = () => (
  <Grid fluid>
    {projects.map((project) =>
      <Row>
        <Col xs={12} md={4} xl={3}>

          <h3> {project.Title} </h3>
          <h4> {project.Text} </h4>
          <div className='category'>
           Promoting enterpreneurs in upcycle industry.
          </div>

          <hr />
          <ul>
            <li> Completion Date - Dec, 2017 </li>
            <li> Design Planning - AAAtelier </li>
            <li> Installation - AAAtelier </li>
            <li> Signage - AAAtelier </li>
            <li> Venue - SETEC, Seoul</li>
            <li> Client - Touch4good </li>
          </ul>

          <hr />

          <h4> SUPPORTING </h4>
          <a href={'www.touch4good.com'}>
            Touch4good
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

export default Upcycle
