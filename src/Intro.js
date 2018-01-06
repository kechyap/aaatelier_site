import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import './Intro.css'

class Intro extends React.Component {
  render () {
    return (
      <div class='head'>
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
                <p>급속한 도시화로 인한 문제 및 환경 문제, 사회 이슈들을 개선하기 위한 제안과 그에 따른 합리적인 디자인을 제안드립니다.</p>

                <h4> 커뮤니티.</h4>
                <p>크리에이티브한 창작자들을 위한 쉐어 하우스, 코워킹 스페이스, 창작자 마을을 구축하기 위한 커뮤니티 공유 공간을 제안 드립니다.</p>

                <h4>통합 디자인 솔루션. </h4>
                <p>도시, 건축, 인테리어, 가구, 소품, 그래픽 디자인을 통합하여 다양한 스케일에서 일관된 해결책을 찾고자 하는 Art and Architecture Atelier입니다.</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className='text' xs={12} md={4} />
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
        </Grid>
      </div>
    )
  }
}

export default Intro
