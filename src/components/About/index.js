import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import logo_white from '../../images/logo_white.svg'
import iconEmail from '../../images/icon_email.svg'
import iconFacebook from '../../images/icon_facebook.svg'
import iconInsta from '../../images/icon_insta.svg'
import iconKakao from '../../images/icon_kakao.svg'

const About = () => (
  <div class='head'>
    <Grid fluid>
      <Row>
        <Col xs={12} md={4}>
          <img src={logo_white} style={{width: '5rem'}} />
        </Col>
        <Col xs={12} md={8}>
          <h2>AAAtelier</h2>
          <p style={{paddingBottom: '3rem'}}>Art and Architecture Atelier</p>
          <div className='intro'>
            <h3>문제 해결.</h3>
            <p>급속한 도시화로 인한 문제 및 환경 문제, 사회 이슈들을 개선하기 위한 제안과 그에 따른 합리적인 디자인을 제안드립니다.</p>

            <h3> 커뮤니티.</h3>
            <p>크리에이티브한 창작자들을 위한 쉐어 하우스, 코워킹 스페이스, 창작자 마을을 구축하기 위한 커뮤니티 공유 공간을 제안 드립니다.</p>

            <h3>통합 디자인 솔루션. </h3>
            <p>도시, 건축, 인테리어, 가구, 소품, 그래픽 디자인을 통합하여 다양한 스케일에서 일관된 해결책을 찾고자 하는 Art and Architecture Atelier입니다.</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='text' xs={12} md={4} />
        <Col xs={12} md={8}>
          <a href='aaatelier@ejay.kim'>
            <img src={iconEmail} className='icon' />
          </a>
          <a href='www.facebook.com/kechyap'>
            <img src={iconFacebook} className='icon' />
          </a>
          <a href='www.instagram.com/aaatelier_ejay'>
            <img src={iconInsta} className='icon' />
          </a>
          <img src={iconKakao} className='icon' />
        </Col>
      </Row>
    </Grid>
  </div>
)

export default About
