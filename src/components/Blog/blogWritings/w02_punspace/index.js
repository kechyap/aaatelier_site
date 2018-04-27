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
  charts: [
    {
       name: 'Location',
       datas: [
      { category: 'SPECIAL ATTRACTION', button: ['sc5' , 'BEST'],
         comment: 'It is okay' },
      { category: 'CLOSE TO METRO STAION', button: ['sc1' , 'BAD'],
         comment: ' 1 ' },
      { category: 'WALKABILITY', button: ['sc3', 'OKAY'],
         comment: ' 3 ' },
      { category: 'PARKING LOT', button: ['sc5' , 'BEST'],
         comment: ' 5 ' },
      { category: 'QUICK LUNCH', button: ['sc3', 'OKAY'],
         comment: ' 3 ' },
      { category: 'FUN ACTIVITY AFTER WORK', button: [ 'sc4', 'GOOD'],
         comment: ' 4' }
      ]
    },

    {
      name: 'Productivity',
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
}

// const MyScore = () =>
//   <div>
//     {project.charts.map((chart) =>
//       <div>
//         <div>
//           <div className= 'pt-3'>
//             <h4 className='mb-0'> { chart.name } </h4>
//             <hr className='no-pm'/>
//           </div>
//         </div>
//
//         {chart.datas.map((data) =>
//           <Grid>
//             <Row>
//               <Col xs={2} md={1}>
//                 <div className= { `box ${ data.button[0] }`} >
//                   <span> { data.button[1] } </span>
//                 </div>
//               </Col>
//
//               <Col xs={10} md={4}>
//                 <div className='scoreT'>
//                   { data.category }
//                 </div>
//               </Col>
//
//               <Col xs={12} md={7}>
//                 <small>
//                   { data.comment }
//                 </small>
//                 <hr />
//               </Col>
//             </Row>
//           </Grid>
//         )}
//       </div>
//     )}
//   </div>



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
            수 많은 코워커들이 방문하는 치앙마이에서 가장 많은 회원을 보유하고 있는  Punspace ! 현재까지 총 3개의 지점을 가지고 있는데 이 중에서 최근에 오픈한 (2018년 1월) Wing-keaw road 지점을 살펴보자.
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
