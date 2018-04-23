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
  chart: [
  {
     name: 'location',
     datas: [
    { category: 'SPECIAL ATTRACTION', button: 'sc1',
       comment: 'It is okay' },
    { category: 'CLOSE TO METRO STAION', button: 'sc1',
       comment: ' 1 ' },
    { category: 'WALKABILITY', button: 'sc3',
       comment: ' 3 ' },
    { category: 'PARKING LOT', button: 'sc5',
       comment: ' 5 ' },
    { category: 'QUICK LUNCH', button: 'sc3',
       comment: ' 3 ' },
    { category: 'FUN ACTIVITY AFTER WORK', button: 'sc4',
       comment: ' 4' }
    ]
  },

  {
    name: 'productivity',
    datas: [
      { category: 'INTERNET SPEED', button: 'bar5',
         comment: 'BEST' },
      { category: 'CHAIR COMFORT', button: 'bar5',
         comment: 'BEST' },
      { category: 'SPACIOUS TABLE', button: 'bar5',
         comment: 'BEST' },
      { category: 'QUIET WORKING AREA', button: 'bar5',
         comment: 'BEST' },
      { category: 'BUSINESS VIDEO CALL', button: 'bar3',
         comment: 'OKAY' },
      { category: 'OUTLET ACCESSIBILITY', button: 'bar4',
         comment: 'GOOD' },
      { category: '24/7 ACCESSIBILITY', button: 'bar4',
         comment: 'GOOD' }
    ]
  },

  {
    name: 'SPACE CONDITION and FACILITY',
    datas: [
      { category: 'COMFORT MEETING ROOM', button: 'bar4',
         comment: '.' },
      { category: 'RELAXED AREA', button: 'bar3',
         comment: '.' },
      { category: 'FREE COFFEE/SNACK', button: 'bar5',
         comment: '.' },
      { category: 'MONITOR RENTAL', button: 'bar1',
         comment: '.' },
      { category: 'LOCKER RENTAL', button: 'bar5',
         comment: '.' },
      { category: 'MAIL HANDLING', button: 'bar4',
         comment: '.' },
      { category: 'PRINT/FAX', button: 'bar5',
         comment: '.' },
      { category: 'SHOWER ROOM', button: 'bar5',
         comment: '.' },
      { category: 'OFFICE CLEANING', button: 'bar3',
         comment: '.' },
      { category: 'BATHROOM CLEANING', button: 'bar4',
         comment: '.' },
      { category: 'BATHROOM PRIVACY', button: 'bar5',
         comment: '.' },
      { category: 'WELL DESIGNED SPACE', button: 'bar3',
         comment: '.' }
    ]
  },

  {
    name: 'LIVING COMMUNITY',
    datas: [
      { category: 'COMMUNITY ORGANIZING', button: 'bar2',
         comment: '.' },
      { category: 'LECTURES / PROGRAMS', button: 'bar3',
         comment: '.' },
      { category: 'SUPPORTING START-UP', button: 'bar4',
         comment: '.' },
      { category: 'HELPFUL STAFF', button: 'bar4',
         comment: '.' },
      { category: 'CHAT-ABLE WORKING AREA', button: 'bar4',
         comment: '.' }
    ]
  }
]

const myScore = ( y ) => (
  y.chart.map (( x ) =>
   <div>
     <div className= 'pt-3'>
       <h4 className='mb-0'> { x.name } </h4>
       <hr className='no-pm'/>
     </div>
   </div>

  { x.datas.map ((datas) =>
    <Row>
      <Col xs={2} md={1}>
        <div className= {`button ${}`}>
          { datas.button }
        </div>
      </Col>

      <Col xs={10} md={4}>
        <div className='scoreT'>
          { datas.category }
        </div>
      </Col>

      <Col xs={12} md={7}>
        <small>
          { datas.comment }
        </small>
      </Col>
    </Row>
   )}
  )
)





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
      </Col>

      <Row className='px-1'>
        <Col xs={12} lg={10} className='no-pm'>
          <br />
          <img alt='' src={require('./01.jpg')} />
          <p>
            ▲
            The Exterior of Punspace. Main Three volumes are dividied by function of the space.
          </p>
          <br />
        </Col>

        <Col xs={12} sm={6} lg={5} className='no-pm'>
          <img alt='' src={require('./02.jpg')} />
          <p className='pr-2'>
            ▲
            Most of coworker's favorite spot is this small garden. You can be relaxed at the small garden after hard working and this voild space is
          </p>
          <br />
        </Col>

        <Col xs={12} sm={6} lg={5} className='no-pm'>
          <img alt='' src={require('./03.jpg')} />
          <p className='pr-2'>
            ▲
            The Exterior of Punspace. It is dividied by three building structures.
          </p>
          <br />
        </Col>

        <Col xs={12} lg={10} className='no-pm'>
          <img alt='' src={require('./04.jpg')} />
          <p className='pr-2'>
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
