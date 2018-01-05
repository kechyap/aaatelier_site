import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import './Aaatelier.css'

class Aaatelier extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [
        {
          folder: 'PF_01_Seam',
          date: 'february 2018',
          title: 'SEAM CENTER',
          text: 'co-working and co-living space ',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03', '04', '05']
        },
        {
          folder: 'PF_02_POPS',
          date: '2017',
          title: 'P O P S FORUM',
          text: 'Private Owned Public Space',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03', '04']
        },
        {
          folder: 'PF_03_Grill',
          date: 'august 2017',
          title: 'GRILL BAG',
          text: 'social issue, restaurant',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03', '04']
        },
        {
          folder: 'PF_03_Grill',
          date: 'august 2017',
          title: 'GRILL BAG',
          text: 'social issue, restaurant',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03', '04']
        }
      ]
    }
  }

  render () {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={4}>
            <img src={require('./icon/logo_white.svg')} style={{width: '4rem'}} />
          </Col>
          <Col xs={12} md={8}>
            <h1>AAAtelier</h1>
            <h4>Art and Architecture Atelier</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} />
          <Col xs={12} md={8}>
            <a href='aaatelier@ejay.kim'>
              <img src={require('./icon/icon_email.svg')} className='icon' />
            </a>
            <a href='www.facebook.com/kechyap'>
              <img src={require('./icon/icon_facebook.svg')} className='icon' />
            </a>
            <a href='www.instagram.com/aaatelier_ejay'>
              <img src={require('./icon/icon_insta.svg')} className='icon' />
            </a>
            <img src={require('./icon/icon_kakao.svg')} className='icon' />
          </Col>
        </Row>

        {this.state.projects.map((project) =>
          <div>
            <hr />
            <Row>
              <Col xs={12} md={4}>
                <h4 style={{color: project.color}}>
                  {project.title}
                </h4>
                <p>
                  {project.text}
                </p>
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  {project.photos.map((photo) =>
                    <Col xs={12} sm={6}>
                      <img src={require(`./${project.folder}/${photo}.png`)} />
                      <br />
                      <br />
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Grid>
    )
  }
}

export default Aaatelier
