import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import Grill from '../Grill/index.js'
import Upcycle from '../Upcycle/index.js'
import Pops from '../Pops/index.js'
import Seam from '../Seam/index.js'

import logo_pink from '../../images/logo_pink.svg'
import iconEmail from '../../images/icon_email.svg'
import iconFacebook from '../../images/icon_facebook.svg'
import iconInsta from '../../images/icon_insta.svg'
import iconKakao from '../../images/icon_kakao.svg'

import grillImage from '../Grill/00.png'

const Home = () => (
  <div className='Home'>
    <div className='Front'>

      <Grid fluid>
        <Row style={{ paddingTop: '4rem'}}>
          <Col xs={4} >
            <img className='logo_pink' src={logo_pink} />
          </Col>

          <Col xs={8}>
            <div>
              <h2> AAAtelier </h2>

              <div className='subtitle'>
                Art and Architecture Atelier
              </div>

              <div className='subsubtitle'>
                Total Design Solution <br />
                Spatial Identity Design
              </div>

            </div>
          </Col>
        </Row>
      </Grid>
    </div>

    <Grill />
    <br /> <br /> <br /> <br /> <br />
    <Upcycle />
    <br /> <br /> <br /> <br /> <br />
    <Pops />
    <br /> <br /> <br /> <br /> <br />
    <Seam />
    <br /> <br /> <br /> <br /> <br />

  </div>
)

export default Home
