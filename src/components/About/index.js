import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import aboutFA from './aboutFA.svg'
import process from './process.svg'
import stripes from './stripesRed.png'
import line from './line.svg'

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
        <Col xs={0} sm={1} md={1} lg={1} />
        <Col xs={12} sm={3} md={3} lg={3}>
          <div className='introHead'>
            <h2>
              TOTAL DESIGN SOLUTION
            </h2>
          </div>
        </Col>
        <Col xs={12} sm={7} md={7} lg={7}>
          <div className='introText'>
          도시, 건축, 인테리어, 가구, 소품, 사인, 그래픽 디자인을 통합하여 다양한 스케일에서 일관된 해결책을 찾고자 하는 Art and Architecture Atelier입니다.
          </div>
          <Col xs={0} sm={1} md={1} lg={1} />
          <br />
        </Col>
      </Row>

      <hr style={{marginBottom: '3rem'}} />

      <Row>
        <Col xs={12} sm={10} md={9} lg={6} xl={5}>
          <div className='aboutImage' style={{textAlign: 'center'}} />
        </Col>
      </Row>

      <div style={{textAlign: 'center'}}>
        <Row>
          <Col xs={12} sm={0} md={0} lg={0} xl={0}>
            <div className='brandIdentityT'>
              <img src={logo} style={{height: '6.5rem'}} />
            </div>
          </Col>

          <Col xs={0} sm={0} md={1} lg={1} />
          <Col xs={12} sm={5} md={3} lg={3}>
            <div className='font-dosis1'>
              <div style={{letterSpacing: '0.4em', paddingLeft: '0.4em'}}>
               ARCHITECTURE
              </div>
              <div style={{letterSpacing: '0.17em', marginRight: '-0.17em'}}>
                & URBAN PLANNING
              </div>

              <div className='text-grey text-justified' style={{letterSpacing: '0.062em'}}>
               urban issue, social issue
               <br />
               community, remodeling
              </div>

              <br />

              <div style={{letterSpacing: '0.95em', marginRight: '-0.95em'}}>
                INTERIOR
            </div>
              <div style={{letterSpacing: '1.46em', marginRight: '-1.46em'}}>
                DESIGN
            </div>
              <div className='text-grey' style={{letterSpacing: '0.001em', marginRight: '-0.001em'}}>
              exhibition, furniture, display
            </div>
              <br />
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} />
          <Col xs={12} sm={2} md={2} lg={2} >
            <div className='brandIdentityM'>
              <div>
                <img src={logo} />
              </div>
              <div style={{letterSpacing: '0.4em', marginRight: '-0.4em'}}>
             BRAND
             </div>
              <div style={{letterSpacing: '0.11em', marginRight: '-0.11em'}}>
             IDENTITY
              </div>
            </div>
          </Col>

          <Col xs={0} sm={0} md={1} lg={1} />
          <Col xs={12} sm={5} md={3} lg={3}>
            <div className='font-dosis2'>
              <div style={{letterSpacing: '0.95em', marginRight: '-0.95em'}}>
              ARTISTIC
            </div>
              <div style={{letterSpacing: '0.55em', marginRight: '-0.55em'}}>
              INSPIRATION
            </div>

              <div className='text-grey' style={{letterSpacing: '0.07em', marginRight: '-0.07em'}}>
              illustration, photograph
            </div>
              <br />

              <div style={{letterSpacing: '1.5em', marginRight: '-1.5em'}}>
             VISUAL
            </div>

              <div style={{letterSpacing: '1.5em', marginRight: '-1.5em'}}>
             DESIGN
            </div>
              <div className='text-grey' style={{letterSpacing: '0.02em', marginRight: '-0.02em'}}>
              signage, poster, publishing
            </div>
              <br />
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} />
        </Row>
      </div>

      <Row>
        <Col xs={0} sm={1} md={1} xl={3} />
        <Col xs={0} sm={10} md={9} xl={7}>
          <img src={aboutFA} />
        </Col>
        <Col xs={0} sm={1} md={2} xl={2} />
      </Row>

      <Row>
        <Col xs={0} sm={0} md={0} lg={1} />
        <Col xs={12} sm={6} md={5} lg={4}>
          <div style={{textAlign: 'center'}}>
            <h2 style={{paddingTop: '4rem', paddingLeft: '1.5rem', paddingRight: '1rem', color: 'rgb(230,130,130)'}}>
            Process for Space Identity Design
          </h2>
            <img src={process} className='diagram' />
          </div>
        </Col>
        <Col xs={12} sm={1} md={1} lg={1} />
        <Col xs={12} sm={5} md={5} lg={4}>
          <div style={{padding: '2rem'}} />
          <h4> 1. Brand Identity </h4>
          <p> AAAtelier의 작업 프로세스는 생명을 창조하는 것과 같습니다. Branding과 공간은 하나의 개성을 지니고 있는 한 생명이며, 각 개체가 가지고 있는 고유한 영혼이 곧 Brand의 Identity입니다. </p>

          <h4> 2. Planning Space Structure </h4>
          <p> Brand의 정의가 정해지면 Client와의 상담을 통해 Brand에 맞는 Structure를 세웁니다. </p>

          <h4> 3. Construction Materials </h4>
          <p> 마감재는 브랜드의 전체 분위기가 표면적으로 보여지는 부분이며 또한 budget에 따라 Marble, Wood, Tile등 합리적인 마감재 선택이 가능합니다. 전체 color 및 pattern 마감재를 선택하는 </p>

          <h4> 4.Signage, furniture, Lighting </h4>
          <p> 브랜드의 특성을 더욱 돋보이게 하는 모든 Fashion display 부분입니다. Fabric, Art works, Lighting, Furniture plan이 이에 속하며, Marketing service 부분에서는 signage, booklet등의 Visual Graphic 작업이 이루어집니다. </p>
        </Col>
        <Col xs={12} sm={0} md={1} lg={2} />
      </Row>

      <Row>
        <Col xs={4} sm={3}>
          <h4> SOCIAL ISSUE </h4>
        </Col>

        <Col xs={8} sm={9}>
          <div className='aboutText'>
            AAAtelier는 급속한 도시화로 인한 문제 및 환경 문제 및 사회 이슈들을 개선하기 위해 고민하고, 그에 따른 합리적인 디자인을 제안드립니다.
          </div>
        </Col>

        <Col xs={4} sm={3}>
          <h4> COMMUNITY SPACE </h4>
        </Col>

        <Col xs={8} sm={9} >
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
