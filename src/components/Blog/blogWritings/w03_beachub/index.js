// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import '../../index.css'

// make data

const project = {
  folder: 'w03_beachub',
  title: 'BEACHUB',
  icon: 'OFFICE, COMMUNITY',
  sub: 'Work at the beach, dream place ko-Phangan, Thailand',
  place: 'Ko-Phangan, Thailand',
  date: '2018. March',
  location: [
  { lo: 'SPECIAL ATTRACTION', l: 'bar5', ll: 'HERITAGE SPOT'},
  { lo: 'CLOSE TO METRO STAION', l: 'bar2', ll: ' . '},
  { lo: 'WALKABILITY', l: 'bar3', ll: ' . '},
  { lo: 'PARKING LOT', l: 'bar2', ll: ' . '},
  { lo: 'QUICK LUNCH', l: 'bar4', ll: ' . '},
  { lo: 'FUN ACTIVITY AFTER WORK', l: 'bar3', ll: ' . '}
  ],
  productivity: [
  { pr: 'INTERNET SPEED', p: 'bar4', pp: '.' },
  { pr: 'CHAIR COMFORT', p: 'bar4', pp: '.' },
  { pr: 'SPACIOUS TABLE', p: 'bar5', pp: '.' },
  { pr: 'QUIET WORKING AREA', p: 'bar4', pp: '.' },
  { pr: 'BUSINESS VIDEO CALL', p: 'bar4', pp: '.' },
  { pr: 'OUTLET ACCESSIBILITY', p: 'bar5', pp: '.' },
  { pr: '24/7 ACCESSIBILITY', p: 'bar4', pp: '.' }
  ],
  facility: [
  { fa: 'COMFORT MEETING ROOM', f: 'bar4', ff: '.' },
  { fa: 'RELAXED AREA', f: 'bar3', ff: '.' },
  { fa: 'FREE COFFEE/SNACK', f: 'bar5', ff: '.' },
  { fa: 'MONITOR RENTAL', f: 'bar1', ff: '.' },
  { fa: 'LOCKER RENTAL', f: 'bar5', ff: '.' },
  { fa: 'MAIL HANDLING', f: 'bar4', ff: '.' },
  { fa: 'PRINT/FAX', f: 'bar5', ff: '.' },
  { fa: 'SHOWER ROOM', f: 'bar5', ff: '.'},
  { fa: 'OFFICE CLEANING', f: 'bar3', ff: '.' },
  { fa: 'BATHROOM CLEANING', f: 'bar4', ff: '.' },
  { fa: 'BATHROOM PRIVACY', f: 'bar5', ff: '.' },
  { fa: 'WELL DESIGNED SPACE', f: 'bar3', ff: '.' }
  ],
  community: [
  { co: 'COMMUNITY ORGANIZING', c: 'bar2', cc: '.'},
  { co: 'LECTURES / PROGRAMS', c: 'bar3', cc: '.'},
  { co: 'SUPPORTING START-UP', c: 'bar4', cc: '.'},
  { co: 'HELPFUL STAFF', c: 'bar4', cc: '.'},
  { co: 'CHAT-ABLE WORKING AREA', c: 'bar4', cc: '.' }
  ]
}

// make Upcycle component
const Beachub = () => (
  <Grid fluid>
    <br /><br /><br />
    <Row>
      <Col xs={12} sm={4} md={3} lg={3}>
        <h2>
          {project.title}
        </h2>
        <hr />
        <h3 className='mb-2'>
          {project.sub}
        </h3>

        <hr />

        <small>
          {project.date}
          <br />
          {project.place}
          <br />
          {project.icon}
        </small>
        <hr />
      </Col>
      <Col sm={1} md={1} lg={1} />

      <Col xs={12} sm={7} md={8} lg={6}>
        <div className='text-align-justify'>
          <h4>Have you ever imagine working on the beach? Sounds like a dream ! </h4>
          <p>
            dlfsusduehddks duftlagl dlf gkrh
            <br />
            <small>
              Photographer : EJay Kim  /
              Writing : EJay Kim
            </small>
          </p>
        </div>

        <Row>
          <Col xs={12} className='pt-3'>
            <p4> LOCATION </p4>
            <hr className='no-pm' />
          </Col>
          
          <Col xs={8} sm={7} md={5} >
            {project.location.map((text) =>
              <div className='scoreT'>
                {`${text.lo}`}
              </div>
            )}
          </Col>

          <Col xs={4} sm={5} md={7} >
            {project.location.map((bar) =>
              <div className='score'>
                <div className={`skills ${bar.l}`}>
                  {`${bar.ll}`}
                </div>
              </div>
            )}
          </Col>
        </Row>

        <Row>
          <Col xs={12} className='pt-3'>
            <p4>  PRODUCTIVITY </p4>
            <hr className='no-pm' />
          </Col>

          <Col xs={8} sm={7} md={5} >
            {project.productivity.map((text) =>
              <div className='scoreT'>
                {`${text.pr}`}
              </div>
           )}
          </Col>

          <Col xs={4} sm={5} md={7} >
            {project.productivity.map((bar) =>
              <div className='score'>
                <div className={`skills ${bar.p}`}>
                  {`${bar.pp}`}
                </div>
              </div>
            )}
          </Col>
        </Row>

        <Row>
          <Col xs={12} className='pt-3'>
            <p4> SPACE CONDITION and FACILITY </p4>
            <hr className='no-pm' />
          </Col>

          <Col xs={8} sm={7} md={5} >
            {project.facility.map((text) =>
              <div className='scoreT'>
                {`${text.fa}`}
              </div>
           )}
          </Col>

          <Col xs={4} sm={5} md={7} >
            {project.facility.map((bar) =>
              <div className='score'>
                <div className={`skills ${bar.f}`}>
                  {`${bar.ff}`}
                </div>
              </div>
            )}
          </Col>
        </Row>

        <Row>
          <Col xs={12} className='pt-3'>
            <p4> LIVING COMMUNITY </p4>
            <hr className='no-pm' />
          </Col>

          <Col xs={8} sm={7} md={5} >
            {project.community.map((text) =>
              <div className='scoreT'>
                {`${text.co}`}
              </div>
           )}
          </Col>

          <Col xs={4} sm={5} md={7} >
            {project.community.map((bar) =>
              <div className='score'>
                <div className={`skills ${bar.c}`}>
                  {`${bar.cc}`}
                </div>
              </div>
            )}
          </Col>
        </Row>

      </Col>
    </Row>
  </Grid>
)

export default Beachub
