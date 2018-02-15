import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import TextIllustration from '../TextIllustration'

const About = () => (
  <div className='About'>
    <div className='intro'>
      <img src={require('./images/stripesRed.png')} />
    </div>

    <Grid>
      <Row>
        <Col xs={12} sm={3} md={3} lg={3}>
          <h2 className='introHead'>
            TOTAL DESIGN SOLUTION
          </h2>
        </Col>
        <Col xs={12} sm={7} md={7} lg={7}>
          <p className='introText'>
            도시, 건축, 인테리어, 가구, 소품, 사인, 그래픽 디자인을 통합하여 다양한 스케일에서 일관된 해결책을 찾고자 하는 Art and Architecture Atelier입니다.
          </p>
        </Col>
      </Row>

      <TextIllustration />

      <hr />

      <Row>
        <Col xs={12} sm={6} md={5} lg={4}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ paddingTop: '4rem', paddingLeft: '1.5rem', paddingRight: '1rem', color: 'rgb(230,130,130)' }}>
              Process for Space Identity Design
            </h2>

            <img src={require('./images/process.svg')} className='diagram' />
          </div>
        </Col>
        <Col xs={12} sm={5} md={5} lg={5}>
          <h4>
            1. Brand Identity
          </h4>

          <p>
            AAAtelier의 작업 프로세스는 생명을 창조하는 것과 같습니다. Branding과 공간은 하나의 개성을 지니고 있는 한 생명이며, 각 개체가 가지고 있는 고유한 영혼이 곧 Brand의 Identity입니다.
          </p>

          <h4>
            2. Planning Layout, Structure
          </h4>

          <p>
            모든 프로세스 중에서 평면 작업이 가장 중요하다고 볼 수 있습니다. Brand의 정의가 정해지면 Client와의 상담을 통해 Brand에 맞는 Structure 및 평면 구성을 Brand에 맞는 맞춤형으로 제안 드립니다.
          </p>

          <h4>
            3. Construction Materials
          </h4>

          <ul>
            <li>
              Visual Language에 따른 Suggestion
              <br />
              마감재는 브랜드의 전체 분위기가 표면적으로 보여지는 부분이며 전체 color 및 pattern 마감재 비율을 고려하여 제안 드립니다.
            </li>

            <li>
              Budget에 따른 Suggestion
              <br />
              또한 budget에 따라 Marble, Wood, Tile등 최고의 효과를 낼 수 있는 합리적인 마감재 선택을 제안 드립니다.
            </li>
          </ul>

          <h4>
            4.Signage, furniture, Lighting
          </h4>

          <p>
            브랜드의 특성을 더욱 돋보이게 하는 모든 Fashion display 부분입니다. Fabric, Art works, Lighting, Furniture plan이 이에 속하며, Marketing service 부분에서는 signage, booklet등의 Visual Graphic 작업이 이루어집니다.
          </p>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col xs={4} sm={3}>
          <h4>
            SOCIAL ISSUE
          </h4>
        </Col>

        <Col xs={8} sm={9}>
          <div className='aboutText'>
            AAAtelier는 급속한 도시화로 인한 문제 및 환경 문제 및 사회 이슈들을 개선하기 위해 고민하고, 그에 따른 합리적인 디자인을 제안드립니다.
          </div>
        </Col>

        <Col xs={4} sm={3}>
          <h4>
            COMMUNITY SPACE
          </h4>
        </Col>

        <Col xs={8} sm={9} >
          <div className='aboutText'>
            크리에이티브한 창작자들을 위한 쉐어 하우스, 코워킹 스페이스, 창작자 마을을 구축하기 위한 커뮤니티 공유 공간을 제안 드립니다.
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default About
