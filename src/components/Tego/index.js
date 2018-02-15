import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

const project = {
  Folder: 'Tego',
  Title: 'TEGO SCIENCE OFFICE',
  Text: 'office, laboratory',

  photos: [
    { filename: 'menuE.svg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '01.jpg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '02.jpg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: 'menu1.svg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '03.jpg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '04.jpg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: 'menu3.svg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '302.jpg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '303.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '401.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '402.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '403.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: 'menu5.svg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '502.jpg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '501.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '503.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '504.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '505.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: 'menu6.svg', break: { xs: 12, sm: 12, md: 12, lg: 2, xl: 10 } },
    { filename: '602.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '603.jpg', break: { xs: 12, sm: 6, md: 6, lg: 6, xl: 5 } },
    { filename: '604.jpg', break: { xs: 12, sm: 12, md: 6, lg: 6, xl: 10 } },
    { filename: '605.jpg', break: { xs: 12, sm: 12, md: 6, lg: 6, xl: 10 } }
  ]
}

const Tego = () => (
  <Grid>
    <Row>
      <Col xs={12} md={4} xl={3}>
        <h3>
          {project.Title}
        </h3>

        <h4>
          {project.Text}
        </h4>

        <p>
          Interior design, Furniture design
        </p>

        <hr />

        <ul>
          <li>Schematic Design - OCT, 2016</li>

          <li>Design Development - MAR, 2017</li>

          <li>Construction Documents - JUNE, 2017</li>

          <li>Design Planning - AAAtelier, Urban society</li>

          <li>Venue - Makok R&D Innovative district, Seoul</li>

          <li>Client - Tego Science</li>
        </ul>

        <hr />

        <h4>
          SUPPORTING
        </h4>

        <a href='www.tegoscience.com' target='_blank'>
          Tego science
        </a>
      </Col>

      <Col xs={12} md={8} xl={9}>
        <Row>
          {project.photos.map((photo) => (
            <Col xs={photo.break.xs} sm={photo.break.sm} md={photo.break.md} lg={photo.break.lg} xl={photo.break.xl}>
              <img src={require(`./images/${photo.filename}`)} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default Tego
