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
      <div className='image-bg pt-5'>
        <div className='top'>
          <div className='pt-5 hide-xs' />
          <div className='pt-5 hide-xs-sm' />
          <TextIllustration />
        </div>
      </div>

      <Grid>
        <hr />
        <Row>
          <Col xs={10} xsOffset={1} sm={12} smOffset={0}>
            <Row className='py-5'>
              <Col xs={12} sm={12} md={6} lg={5}>
                <h2 style={{color: 'rgb(230,130,130)'}}>
                  Process for Space Identity Design
                </h2>

                <div style={{color: 'var(--pink3)', textAlign: 'justify'}}>
                  Brand Identity는 디자인 표면에서만 드러나는것이 아닙니다. 브랜드의 가치와 철학은 평면 작업에서부터 시작하여, 구조, 평면, 마감재, 작은 소품까지 모든 시각 언어로 사용자의 경험을 디자인합니다.
                </div>

                <Row>
                  <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={8} mdOffset={2} lg={8} lgOffset={2}>
                    <div className='diagram my-3' style={{textAlign: 'center'}} >
                      <img src={require('./images/process.svg')} />
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} sm={12} md={4} mdOffset={1} lg={5} lgOffset={1}>
                <div className='diagramExplanation'>
                  <h4>
                    1. BRAND IDENTITY
                  </h4>

                  <p className='text-align-justify' >
                    AAAtelier의 작업 프로세스는 생명을 창조하는 것과 같습니다. Branding과 공간은 하나의 개성을 지니고 있는 한 생명이며, 각 개체가 가지고 있는 고유한 영혼이 곧 Brand의 Identity입니다.
                  </p>

                  <h4>
                    2. SPACE PLANNING, LAYOUT and STRUCTURE
                  </h4>

                  <p className='text-align-justify'>
                    모든 프로세스 중에서 평면 작업이 가장 중요하다고 볼 수 있습니다. Brand의 정의가 정해지면 Client와의 상담을 통해 Brand에 맞는 Structure 및 평면 구성을 Brand에 맞는 맞춤형으로 제안 드립니다.
                  </p>

                  <h4>
                    3. CONSTRUCTION MATERIAL
                  </h4>

                  <div className='underline'>
                    Suggestion1.
                    <br />
                     Visual Language에 따른 제안
                  </div>

                  <p className='text-align-justify'>
                    마감재는 브랜드의 전체 분위기가 표면적으로 보여지는 부분이며 전체 color 및 pattern 마감재 비율을 고려하여 제안 드립니다.
                  </p>

                  <div className='underline'>
                    Suggestion2: <br/>
                    Budget에 따른 제안
                  </div>

                  <p className='text-align-justify'>
                    Project의 budget에 따라 Marble, Wood, Tile등 최고의 효과를 낼 수 있는 합리적인 마감재 선택을 제안 드립니다.
                  </p>

                  <h4>
                    4. FABRIC, FURNITURE, OBJECTS
                  </h4>

                  <p className='text-align-justify'>
                    브랜드의 특성을 더욱 돋보이게 하는 모든 Fashion display 부분입니다. Fabric, Art works, Lighting, Furniture plan이 이에 속하며, Marketing service 부분에서는 signage, booklet등의 Visual Graphic 작업이 이루어집니다.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>

    <Grid>
      <Row>
        <Col xs={10} xsOffset={1} sm={12} smOffset={0}>
          <hr />
          <Row className='pt-3'>
            <Col xs={12}>
              <h2 style={{ color: 'rgb(250, 150, 150)' }}>
                Ready for your concern
              </h2>
            </Col>
          </Row>

          <Row className='py-2'>
            <Col xs={12} sm={3} lg={4}>
              <h4>
                SPACE IDENTITY
              </h4>
            </Col>

            <Col xs={12} sm={8} lg={7}>
              <div className='text-align-justify'>
                <p> 공간 디자인은 삶을 담아내는 그릇입니다. 유행을 따르기 보다는 우리의 삶을 이해하고 본질적인 문제 추구에서부터 디자인 작업을 시작하여 좋은 그릇을 만드는 것이 목표입니다.
                </p>
              </div>
            </Col>
          </Row>

          <Row className='py-2'>
            <Col xs={12} sm={3} lg={4}>
              <h4>
                SOCIAL ISSUE
              </h4>
            </Col>

            <Col xs={12} sm={8} lg={7}>
              <div className='text-align-justify'>
                <p>
                  AAAtelier는 급속한 도시화로 인한 문제 및 환경 문제 및 사회 이슈들을 개선하기 위해 고민하고, 그에 따른 합리적인 디자인을 제안드립니다.
                </p>
              </div>
            </Col>
          </Row>

          <Row className='py-2'>
            <Col xs={12} sm={3} lg={4}>
              <h4>
                COMMUNITY SPACE
              </h4>
            </Col>

            <Col xs={12} sm={8} lg={7}>
              <div className='text-align-justify'>
                <p>
                  크리에이티브한 창작자들을 위한 쉐어 하우스, 코워킹 스페이스, 창작자 마을을 구축하기 위한 커뮤니티 공유 공간을 제안 드립니다.
                </p>
              </div>
            </Col>
          </Row>

          <Row className='py-2'>
            <Col xs={12} lg={11}>
              <small>
                #human #future #lifestyle #common space #community #co living #shared house #residential #co working #office #residence #environment issue #upcycle #urban issue #gentrification #public space #POPS
              </small>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>

    <hr />
    <Foot />
  </div>
)

// export About component
export default About
