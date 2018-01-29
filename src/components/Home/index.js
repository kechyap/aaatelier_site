import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './index.css'

import logo_pink from '../../images/logo_pink.svg'
import iconEmail from '../../images/icon_email.svg'
import iconFacebook from '../../images/icon_facebook.svg'
import iconInsta from '../../images/icon_insta.svg'
import iconKakao from '../../images/icon_kakao.svg'

import grillImage from '../Grill/00.png'

const projects = [

  {
    Folder: 'Grill',
    Date: 'October 2017',
    Title: 'Grill Bag',
    Text: 'social inovation business, restaurant',

    Venue: 'Seoungsu, Seoul',
    DesignPlanning: 'AAAtelier',
    Construction: 'AAAtelier',
    Signage: 'AAAtelier',
    Photograph: 'AAAtelier',
    Client: 'MYSC',
    ClientLink: 'mysc.co.kr',
    ProjectLink: 'www.instagram.com/grillbag',

    photos: [
      {
        filename: 'menuU.svg',
        break: { xs: 12, sm: 12, xl: 10 },
        title: 'So cool',
        text: 'I made this one and omg so cool there was a dude and he was lit af.'
      },
      {
        filename: 'notAnImage',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: 'menuP.svg',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '01.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      },
      {
        filename: '02.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      },
      {
        filename: '06.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      },
      {
        filename: '07.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      },
      {
        filename: '05.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '03.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '04.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '08.png',
        break: { xs: 12, sm: 12, xl: 10 }
      },
      {
        filename: 'menuD.svg',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '09.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '10.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: 'Some title here',
        text: 'Dis was cool'
      },
      {
        filename: '11.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '12.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: 'menuS.svg',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '13.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '14.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      }
    ]
  },

  {

    Folder: 'Upcycle',
    Date: 'December 2017',
    Title: 'Upcycle Exhibition',
    Text: 'Upcycle network exhibition',
    Client: 'touch4good',
    Link: 'www.google.com',
    Venue: 'SETEC, Seoul',
    photos: [
      {
        filename: '00.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      },
      {
        filename: '10.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      },
      {
        filename: '01.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '02.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '03.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '06.svg',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '07.svg',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '08.svg',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      }
    ]
  },

  {
    Folder: 'Pops',
    Date: '2017',
    Title: 'P.O.P.S FORUM',
    Text: 'Private Owned Public Space',
    Client: 'touch4good',
    Link: 'www.google.com',
    Venue: 'SETEC, Seoul',
    photos: [

      {
        filename: '02.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '03.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      },
      {
        filename: '04.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      },
      {
        filename: '01.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: '',
        text: ''
      }
    ]
  },

  {
    Folder: 'Seam',
    Date: 'february 2017',
    Title: 'SEAM CENTER',
    Text: 'co-working and co-living space ',
    Client: '더작은재단',
    Link: 'seam.center',
    Venue: 'SETEC, Seoul',
    photos: [
      {
        filename: '01.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '02.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '03.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '04.png',
        break: { xs: 12, sm: 12, xl: 10 },
        title: '',
        text: ''
      },
      {
        filename: '05.png',
        break: { xs: 12, sm: 6, xl: 5 },
        title: 'Hi mom',
        text: 'I like dickens'
      }
    ]
  }

]

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

    <Grid fluid>
      {projects.map((project) =>
        <Row>
          <Col xs={12} md={4} xl={3}>

            <h3> {project.Title} </h3>
            <p> {project.Text} </p>

            <hr />
            <ul>
              <li> Design Planning - {project.DesignPlanning} </li>
              <li> Construction - {project.Construction} </li>
              <li> Signage - {project.Signage} </li>
              <li> Photograph - {project.Photograph} </li>
              <li> Venue - {project.Venue} </li>
              <li> Business Planning - {project.Client}</li>
            </ul>
            <hr />
            <h4> SUPPORTING </h4>
            <a href={project.ClientLink}>
              {project.Client}
            </a>
            <br />
            <a href={project.ProjectLink} >
              {project.Title}
            </a>
          </Col>

          <Col xs={12} md={8} xl={9} style={{padding: '0', margin: '0'}}>
            <Row>
              {project.photos.map((photo) =>
                <Col style={{padding: '0', margin: '0'}} xs={photo.break.xs} sm={photo.break.sm} xl={photo.break.xl}>
                  {photo.filename === 'notAnImage' ? (
                    <svg viewBox='0 0 1800 994' xmlns='http://www.w3.org/2000/svg'>
                      <image xlinkHref={grillImage} height='994' width='1800' />
                      <g transform='translate(1395 382)'>
                        <circle className='st2' r='1' style={{color: 'rgba(255,255,255,0.1)'}}>
                          <animateTransform
                            attributeType='xml'
                            attributeName='transform'
                            type='scale'
                            from='0'to='60'
                            begin='0s'
                            dur='1s'
                            repeatCount='indefinite' />
                        </circle>
                      </g>
                    </svg>
                  ) : (
                    <div style={{position: 'relative'}}>
                      <div style={{position: 'absolute', top: 0, left: 0, right: 0}}>
                        {photo.title}
                      </div>
                      <img src={require(`../${project.Folder}/${photo.filename}`)} />
                      <div style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
                        {photo.text}
                      </div>
                    </div>
                  )}
                </Col>
            )}
            </Row>
          </Col>
        </Row>
    )}
    </Grid>
  </div>
)

export default Home
