import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const project = [
  {
    Folder: 'Seam',
    Title: 'SEAM CENTER',
    Text: 'co-working & co-living place',

    photos: [
      { filename: '01.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '02.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '03.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '04.png', break: { xs: 12, sm: 12, xl: 10 } },
      { filename: '05.png', break: { xs: 12, sm: 6, xl: 5 } }
    ]
  }
]

const Seam = () => (
  <Grid fluid>
    {project.map((project) =>
      <Row>
        <Col xs={12} md={4} xl={3}>

          <h3> {project.Title} </h3>
          <h4> {project.Text} </h4>
          <div className='category'>
            SEAM(Social Entrepreneurship And mission) CENTER is the HUB to promote and support Social Enterprisers in pursuit of Christian faith. We plan to minimize alterations to the exterior but entirely convert inside of building into community hub – basement and 1st floor are designed for co-working space and 2nd & 3rd floor are planned for share house. The theme of this building is “Platform of spare sharing” <br /> <br />
            This building was built in 1990 as a typical multifamily housing. It borders high-rise apartment neighboring Seoul Forest. We extend existing outer-stairway and newly make main entrance of co-working space in order to have closer relationship with the dead end road (outside of building). Instead of hiding old and poor condition of the outer wall, we choose facade design using paint finishing and wooden louver to bring memories and traces of the past in natural way.
          </div>

          <hr />
          <ul>
            <li> Completion Date - Feb, 2017 </li>
            <li> Design Planning - AAAtelier, Urban society </li>
            <li> Supervising - AAAtelier, Urban society </li>
            <li> Construction - ILwoo Design </li>
            <li> Signage - GramGram </li>
            <li> Photograph - Namsun Lee </li>
            <li> Venue - Seoungu, Seoul </li>
            <li> Client - The small foundation </li>
            <li> Building Management - Impact Square </li>
          </ul>
          <hr />
          <h4> SUPPORTING </h4>
          <a href={'seam.center'}>
            SEAM CENTER
          </a>
          <br / >
          <a href={'www.impactsquare.com'}>
          Impact Square
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

export default Seam
