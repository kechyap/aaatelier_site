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
            <img src={require('./icon/logo_white.svg')} style={{width: '5rem'}} />
          </Col>
          <Col xs={12} md={8}>
            <h2>AAAtelier</h2>
            <p>Art and Architecture Atelier</p>
            <div>
              <h4>문제 해결.</h4>
              <p>급속한 도시화로 인한 문제 및 환경 문제, 사회이슈들을 개선하기 위한 제안과 그에 따른 합리적인 디자인을 제안드립니다.</p>

              <h4> 커뮤니티.</h4>
              <p>크리에이티브한 창작자들을 위한 쉐어 하우스, 코워킹 스페이스, 창작자 마을을 구축하기 위한 커뮤니티 공유 공간을 제안 드립니다.</p>

              <h4>통합 디자인 솔루션. </h4>
              <p>도시, 건축, 인테리어, 가구, 소품, 그래픽 디자인을 통합하여 다양한 스케일에서 일관된 해결책을 찾고자 하는 Art and Architecture Atelier입니다.</p>


            </div>
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
