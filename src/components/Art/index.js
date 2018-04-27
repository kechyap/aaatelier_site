// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'


// import local files & components
import './01.png'
import './02.png'

import Foot from '../Foot'
import './index.css'

// make App component
const Art = () => (
  <div className='Art'>
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <br /><br /><br />
          <h1 className='pb-0'>
            Art Gallery
          </h1>
        </Col>

        <Col xs={12} sm={5} md={4} lg={3} className='pr-2'>
          <h2>Illustrations and Hand Drawings</h2>

          <hr className='mr-2 my-3'/>

          <b className='hide-xs'>
            ACHIEVABLE SKILLS &nbsp;
            <br className='hide-xs'/>
            by DRAWINGS
          </b>

          <div className='sub show-xs'>
            ACHIEVABLE SKILLS &nbsp;
            <br className='hide-xs'/>
            by DRAWINGS
          </div>

          <small>
            1. Lower chance to loose Ideas<br/>
            2. To developt prototypes quickly<br/>
            3. Color Skills Up<br/>
            4. Real freedom in your own world<br/>
          </small>
        </Col>

        <Col xs={12} sm={7} md={8} lg={7} style={{paddingTop:'1.3rem'}}>

          <b>Between Logic and Art</b>
          <p>
            Good architecture and Good user experienced design should be based on logical theory and data analysis. I beleive that to set a right goal in the beggining is one of the most important part of the project, but after setting strict rules, you can find out the artistic-freedom-spots easily.
          </p>



          <b>Personal Story</b>
          <p>
            Until 17years old, all my future dream was being a illustrator. However, I couldn't allow to go art studio that I coldn't have
            I collected animation, manga, illustraion on the magazine for fun   I got a best prize
            design/ architecture university, I am trying not to loose artistic mind and drawing skills during a logical project.
            <br/><br/><br/><br/>
          </p>
        </Col>
      </Row>
    </Grid>

    <Grid fluid className='no-pm'>
      <Row>
        <Col xs={12} sm={12} md={12} lg={10} className='no-pm'>
          <img alt='cat, drawing, illustration, aaatelier, ejay, eunjin' src={require('./01.png')} />

          <img alt='cake, drawing, illustration, aaatelier, ejay, eunjin' src={require('./02.png')} />
          </Col>
        </Row>

    </Grid>


    <hr />
    <Foot />

  </div>
)

export default Art
