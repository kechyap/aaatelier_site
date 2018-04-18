// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import '../../index.css'

import './01.jpg'
import './02.jpg'
import './03.jpg'
import './04.jpg'

// make data

const project = {
  folder: 'w03_punspace',
  title: 'PUNSPACE',
  icon: 'OFFICE, COMMUNITY',
  sub: 'The best Co-working space in Chiangmai, Thailand',
  place: 'Chiangmai, Thailand',
  date: '2018. February',
  location: [
  { lo: 'SPECIAL ATTRACTION', l: 'bar3', ll: '3'},
  { lo: 'CLOSE TO METRO STAION', l: 'bar1', ll: ' 1 '},
  { lo: 'WALKABILITY', l: 'bar3', ll: ' 3 '},
  { lo: 'PARKING LOT', l: 'bar5', ll: ' 5 '},
  { lo: 'QUICK LUNCH', l: 'bar3', ll: ' 3 '},
  { lo: 'FUN ACTIVITY AFTER WORK', l: 'bar4', ll: ' 4'}
  ],
  productivity: [
  { pr: 'INTERNET SPEED', p: 'bar5', pp: 'BEST' },
  { pr: 'CHAIR COMFORT', p: 'bar5', pp: 'BEST' },
  { pr: 'SPACIOUS TABLE', p: 'bar5', pp: 'BEST' },
  { pr: 'QUIET WORKING AREA', p: 'bar5', pp: 'BEST' },
  { pr: 'BUSINESS VIDEO CALL', p: 'bar3', pp: 'OKAY' },
  { pr: 'OUTLET ACCESSIBILITY', p: 'bar4', pp: 'GOOD' },
  { pr: '24/7 ACCESSIBILITY', p: 'bar4', pp: 'GOOD' }
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
const Punspace = () => (
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
          <h4>The old Soda factory was changed into co-working space</h4>
          <p>
          2017년 늦 가을, 서울 성수동에 새로 문을 연 HEY GROUND ! 지하 1층 부터 ROOF TOP FLOOR인 8층까지 공유 사무실인 이 곳은, 작은 1인 기업부터 큰 기업까지 아우르는 체인지 메이커들을 위한 코워킹 공간이다. 코워킹 스페이스에서 가장 중요한 부분은 각 객체들이 우연하게 마주칠 수 있는 common area가 가장 중요하다. 그 중에서도 물리적인 위치 때문에 가장 활발한 활동이 일어나는 1F Lobby공간과 이와 자연스럽게 얽혀있는 카페, 레스토랑, shop등의 Service program의 기획과 배치를 살펴보자.
          </p>
          <small>
              Photographer : EJay Kim  /
              Writing : EJay Kim
          </small>
        </div>

        <Row>
          <Col xs={12} className='pt-3'>
            <p4> LOCATION </p4>
            <hr className='no-pm' />
            <p />
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
                <div className={`skills ${bar.l}`} >
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

      <Row className='px-1'>
        <Col xs={12} lg={10} className='no-pm'>
          <br />
          <img src={require('./01.jpg')} />
          <p>
        ▲
        The Exterior of Punspace. It is dividied by three building structures.
      </p>
          <br />
        </Col>

        <Col xs={12} sm={6} lg={5} className='no-pm'>
          <img src={require('./02.jpg')} />
          <p>
        ▲
        The Exterior of Punspace. It is dividied by three building structures.
      </p>
          <br />
        </Col>

        <Col xs={12} sm={6} lg={5} className='no-pm'>
          <img src={require('./03.jpg')} />
          <p>
        ▲
        The Exterior of Punspace. It is dividied by three building structures.
      </p>
          <br />
        </Col>

        <Col xs={12} lg={10} className='no-pm'>
          <img src={require('./04.jpg')} />
          <p>
        ▲
        The Exterior of Punspace. It is dividied by three building structures.
      </p>
          <br />
        </Col>
      </Row>

    </Row>
  </Grid>
)

export default Punspace
