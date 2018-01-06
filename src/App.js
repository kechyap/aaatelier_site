import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Intro from './Intro'

import './App.css'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: [
        {
          folder: 'PF_01_Seam',
          date: 'february 2018',
          title: 'SEAM CENTER',
          text: 'co-working and co-living space ',
          client: 'touch4good',
          venue: 'SETEC, Seoul',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03', '04', '05']
        },
        {
          folder: 'PF_02_POPS',
          date: '2017',
          title: 'P O P S FORUM',
          text: 'Private Owned Public Space',
          client: 'touch4good',
          venue: 'SETEC, Seoul',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03', '04']
        },
        {
          folder: 'PF_03_Grill',
          date: 'august 2017',
          title: 'GRILL BAG',
          text: 'social issue, restaurant',
          client: 'touch4good',
          venue: 'SETEC, Seoul',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03', '04']
        },
        {
          folder: 'PF_03_Grill',
          date: 'august 2017',
          title: 'GRILL BAG',
          text: 'social issue, restaurant',
          client: 'touch4good',
          venue: 'SETEC, Seoul',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03', '04']
        },
        {
          folder: 'PF_04_Upcycle',
          date: 'December 2017',
          title: 'Upcycle Exhibition',
          text: 'Upcycle network exhibition',
          client: 'touch4good',
          venue: 'SETEC, Seoul',
          color: 'rgba(255, 255, 255, 0.9)',
          photos: ['01', '02', '03']
        }
      ]
    }
  }

  render () {
    return (
      <Grid fluid>
        {this.state.projects.map((project) =>
          <Row>
            <Col xs={12} md={4}>
              <h4 style={{color: project.color}}>
                {project.title}
              </h4>
              <p>
                client - {project.client}
                <br />
                venue - {project.venue}
              </p>
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
        )}
      </Grid>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <Router>
        <div>
          <Link to='/'>Home Link</Link>
          <Link to='/intro'>Intro Link</Link>

          <Route exact path='/' component={Home} />
          <Route path='/intro' component={Intro} />
        </div>
      </Router>
    )
  }
}

export default App
