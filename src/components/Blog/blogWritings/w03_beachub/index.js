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
  date: '2018. March'
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
          <h4>The old Soda factory was changed into co-working space</h4>
          <p>
          2017년 늦 가을, 서울 성수동에 새로 문을 연 HEY GROUND ! 지하 1층 부터 ROOF TOP FLOOR인 8층까지 공유 사무실인 이 곳은, 작은 1인 기업부터 큰 기업까지 아우르는 체인지 메이커들을 위한 코워킹 공간이다. 코워킹 스페이스에서 가장 중요한 부분은 각 객체들이 우연하게 마주칠 수 있는 common area가 가장 중요하다. 그 중에서도 물리적인 위치 때문에 가장 활발한 활동이 일어나는 1F Lobby공간과 이와 자연스럽게 얽혀있는 카페, 레스토랑, shop등의 Service program의 기획과 배치를 살펴보자. <br />
            <small>
                Photographer : EJay Kim  /
                Writing : EJay Kim
            </small>
          </p>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default Beachub
