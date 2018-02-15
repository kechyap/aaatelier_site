// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import Foot from '../Foot'
import TextIllustration from '../TextIllustration'
import './index.css'

// make About component
const About = () => (
  <div className='About'>
    <div className='front'>
      <div className='intro'>
        <img src={require('./images/stripesRed.png')} />
      </div>

      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <h2 style={{ color: 'white' }}>
              TOTAL DESIGN SOLUTION
            </h2>
          </Col>
          <Col xs={12} md={8}>
            <div className='text-align-justify'>
              도시, 건축, 인테리어, 가구, 소품, 사인, 그래픽 디자인을 통합하여 다양한 스케일에서 일관된 해결책을 찾고자 하는 Art and Architecture Atelier 입니다.
            </div>
          </Col>
        </Row>


        <div className='pt-5 pb-2'>
          <TextIllustration />
        </div>

        <hr />

        <Row className='py-5'>
          <Col xs={12} sm={12} md={11} lg={10}>
            <h2 style={{color: 'rgb(230,130,130)'}}>
              Process for Space Identity Design
            </h2>

            <div style={{ color: 'var(--pink3)' }}>
              Brand Identity는 디자인 표면에서만 드러나는것이 아닙니다. 브랜드의 가치와 철학은 평면 작업에서부터 시작하여, 구조, 평면, 마감재, 작은 소품까지 모든 시각 언어로 사용자의 경험을 디자인합니다.
            </div>
          </Col>
        </Row>
      </Grid>
    </div>

    <Grid>
      <Row className='py-5'>
        <Col xs={12} sm={12} md={6} lg={5}>
          <Row>
            <Col xs={3} md={3} lg={3} />

            <Col xs={6} md={6} lg={6}>
              <div className='diagram' style={{textAlign: 'center'}} >
                <img src={require('./images/process.svg')} />
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={12} sm={12} md={6} lg={7}>
          <div className='diagramExplanation'>
            <h4>
              1. BRAND IDENTITY
            </h4>

            <p>
              AAAtelier의 작업 프로세스는 생명을 창조하는 것과 같습니다. Branding과 공간은 하나의 개성을 지니고 있는 한 생명이며, 각 개체가 가지고 있는 고유한 영혼이 곧 Brand의 Identity입니다.
            </p>

            <h4>
              2. SPACE PLANNING, LAYOUT and STRUCTURE
            </h4>

            <p>
              모든 프로세스 중에서 평면 작업이 가장 중요하다고 볼 수 있습니다. Brand의 정의가 정해지면 Client와의 상담을 통해 Brand에 맞는 Structure 및 평면 구성을 Brand에 맞는 맞춤형으로 제안 드립니다.
            </p>

            <h4>
              3. CONSTRUCTION MATERIAL
            </h4>

            <div className='underline'>
              Suggestion 1: Visual Language
            </div>

            <p>
              마감재는 브랜드의 전체 분위기가 표면적으로 보여지는 부분이며 전체 color 및 pattern 마감재 비율을 고려하여 제안 드립니다.
            </p>

            <div className='underline'>
              Suggestion 2: Budget에 따른 제안
            </div>

            <p>
              또한 budget에 따라 Marble, Wood, Tile등 최고의 효과를 낼 수 있는 합리적인 마감재 선택을 제안 드립니다.
            </p>

            <h4>
              4. FABRIC, FURNITURE, OBJECTS
            </h4>

            <p>
              브랜드의 특성을 더욱 돋보이게 하는 모든 Fashion display 부분입니다. Fabric, Art works, Lighting, Furniture plan이 이에 속하며, Marketing service 부분에서는 signage, booklet등의 Visual Graphic 작업이 이루어집니다.
            </p>
          </div>
        </Col>
      </Row>

      <hr />

      <Row className='py-5'>
        <Col lg={1} />

        <Col xs={4} sm={3}>
          <h3> INTERESTED ISSUES </h3>
        </Col>

        <Col xs={4} sm={3}>
          <h4>
            SOCIAL ISSUE
          </h4>
        </Col>

        <Col xs={8} sm={9}>
          <div className='abouttext'>
            AAAtelier는 급속한 도시화로 인한 문제 및 환경 문제 및 사회 이슈들을 개선하기 위해 고민하고, 그에 따른 합리적인 디자인을 제안드립니다.
          </div>
        </Col>

        <Col xs={4} sm={3}>
          <h4>
            COMMUNITY SPACE
          </h4>
        </Col>

        <Col xs={8} sm={9} >
          <div className='abouttext'>
            크리에이티브한 창작자들을 위한 쉐어 하우스, 코워킹 스페이스, 창작자 마을을 구축하기 위한 커뮤니티 공유 공간을 제안 드립니다.
          </div>
        </Col>
      </Row>
    </Grid>

    <Foot />
  </div>
)

// export About component
export default About
