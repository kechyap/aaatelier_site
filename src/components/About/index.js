import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import aboutTextL from './aboutTextL.svg'
import process from './process.svg'
import stripes from './stripesRed.png'

import iconEmail from './icon_email.svg'
import iconFacebook from './icon_facebook.svg'
import iconInsta from './icon_insta.svg'

import logo from '../../images/logo_white.svg'

const About = () => (
  <div className='About'>
    <div className='intro'>
      <img src={stripes} />
    </div>

    <Grid fluid>
      <Row>
        <Col xs={12} sm={11} md={8} lg={7} xl={6}>
            <img src={aboutTextL} className='aboutTextL'/>
        </Col>

        <Col xs={12} md={4} lg={4} xl={3}>
          <div className='introHead'>
            <h3> TOTAL DESIGN SOLUTION </h3>
          도시, 건축, 인테리어, 가구, 소품, 사인, 그래픽 디자인을 통합하여
          다양한 스케일에서 일관된 해결책을 찾고자 하는 AAAtelier입니다.
        </div>
        </Col>
      </Row>
    </Grid>

    <Grid fluid>

      <Row>
        <Col xs={12} sm={6} md={6} ld={5} xl={4}>
          <img src={process} className='diagram' />
        </Col>

        <Col xs={12} sm={6} md={6} ld={7} xl={6}>
          <h4>  SPACE IDENTITY DESIGN PROCESS </h4>
              sldjflsdflskdflkdlmslkdjflsdjflksdlksdlfksdlfj
          </Col>
      </Row>

      <Row>
        <Col xs={4} sm={4} md={3}>
          <h4> SOCIAL ISSUE </h4>
        </Col>

        <Col xs={8} sm={8} md={9}>
          <div className='aboutText'>
            AAAtelier는 급속한 도시화로 인한 문제 및 환경 문제 및 사회 이슈들을 개선하기 위해 고민하고, 그에 따른 합리적인 디자인을 제안드립니다.
          </div>
        </Col>

        <Col xs={4} sm={4} md={3}>
          <h4> COMMUNITY SPACE </h4>
        </Col>

        <Col xs={8} sm={8} md={9} >
          <div className='aboutText'>
            크리에이티브한 창작자들을 위한 쉐어 하우스, 코워킹 스페이스, 창작자 마을을 구축하기 위한 커뮤니티 공유 공간을 제안 드립니다.
          </div>
        </Col>
      </Row>
    </Grid>

    <hr style={{paddingTop: '1rem'}} />
    <div className='ending'>
      <Grid fluid>
        <Row>
          <Col xs={4.1} sm={4} md={3}>
             CONTACT AAAtelier
            <p style={{height: '0.9rem', marginTop: '0.3rem'}}>
             aaatelier @ ejay.kim
           </p>
          </Col>

          <Col xs={7.9} sm={8} md={7} >
            <a href='aaatelier@ejay.kim'>
              <img src={iconEmail} className='icon' />
            </a>
            <a href='www.facebook.com/kechyap'>
              <img src={iconFacebook} className='icon' />
            </a>
            <a href='www.instagram.com/aaatelier_ejay'>
              <img src={iconInsta} className='icon' />
            </a>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

export default About
