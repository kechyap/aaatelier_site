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

        <Col xs={12} sm={5} md={4} lg={3} className='pr-3'>
          <h2>Illustrations and Hand Drawings</h2>

          <div className='show-xs'>
            <hr className='my-3'/>
            <b>ACHIEVABLE SKILLS by DRAWINGS</b>
            <p>
              1. Lower chance to loose Ideas<br/>
              2. To develop prototypes quickly<br/>
              3. Color Skills Up<br/>
              4. To train your imaginations
            </p>
          </div>

          <div className='hide-xs'>
            <hr className='mr-2 my-4'/>
            <div className='sub py-3'>
              ACHIEVABLE SKILLS &nbsp;
              <br/>
              by DRAWINGS
            </div>

            <small>
              1. Lower chance to loose Ideas<br/>
              2. To developt prototypes quickly<br/>
              3. Color Skills Up<br/>
              4. Real freedom in your own world<br/>
            </small>
          </div>
        </Col>

        <Col xs={12} sm={7} md={8} lg={7} style={{paddingTop:'1.3rem'}}>

          <b>Between Logic and Art</b>
          <p>
            Good architecture and Good user experienced design should be based on logical theory and data analysis. I believe that to set a logical goal in the beginning is one of the most important part of the project, but after setting strict rules, you can find out the artistic-freedom-spots easily.
          </p>



          <b>Personal Story</b>
          <p>
            It was miraculous that I won the best prize in the university art awards between more than thousands of art students who educated in the proper art studio.
            Until 17 years old, all my future dream was being a painter, but I couldn't afford to go art studio at that time. Instead, I only collected some images on comic books or magazines and illustrated fictional characters from my dreamworld. <br/>
            From this experience, I believe that if I want to achive new skills, practicing by yourself is not difficult. If you enjoy your work like a game, you will love to repeat practicing and finally anyone can reach the goal in the end.
            <br/><br/>

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


    
    <Foot />

  </div>
)

export default Art
