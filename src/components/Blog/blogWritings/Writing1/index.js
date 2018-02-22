// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import '../../index.css'

import './01.jpg'
import './02.jpg'
import './03.jpg'
import './04.jpg'
import './05.jpg'

// make data

const project = {
  folder: 'Writing1',
  title: 'HEY GROUND',
  sub: 'Co working space for Social entrepreneurs and Change makers',
  place: 'Seoul, South Korea',
  date: '2017'
}

// make Upcycle component
const Writing1 = () => (
  <Grid fluid>
    <Row>
      <Col xs={7} sm={4} lg={3}>
        <div className='py-0 px-1'>
          <h2>
            {project.title}
          </h2>
          <h4 className='mb-4'>
            {project.sub}
          </h4>
          <small>
            {project.date}
            <br />
            {project.place}
          </small>
        </div>
      </Col>

      <Col xs={12} sm={8} lg={7}>
        <div className='py-2 text-align-justify'>
          <h3>The Space planning and program for the 1st floor in Creative office building.</h3>
          <p>2017년 늦 가을, 서울 성수동에 새로 문을 연 HEY GROUND! 지하 1층부터 ROOF TOP FLOOR인 8층까지 공유 사무실인 이 곳은, 작은 1인 기업부터 큰 기업까지 아우르는 체인지 메이커들을 위한 코워킹 공간입니다. 단독 사무실과 다르게 코워킹 스페이스에서 가장 중요한 부분은 각 객체들이 우연하게 만날수 있는 common area가 가장 중요한데, 그 중에서도 물리적 위치 때문에 가장 활발한 활동이 일어나는 Lobby, 이와 자연스럽게 얽혀있는 카페, 레스토랑, shop등의 서비스 프로그램 플래닝이 핵심이라고 볼 수 있습니다.</p>
          <ul>
            <li> Photograph : EJay Kim </li>
            <li> Writing : EJay Kim </li>
          </ul>
        </div>
      </Col>
    </Row>

    <Row>
      <Col xs={12} lg={10} className='no-pm'>
        <hr />
      </Col>

      <Col xs={12} sm={12} md={6} lg={5} className='no-pm'>
        <img src={require('./01.jpg')} />
        <b>
          ▲ Space information : 'Young Chun' Cafe and Bar
        </b> <br />
        <p>☀︎ : 가로변에서 카페와 바로 이어진 입구로 멤버쉽과 비멤버쉽을 한꺼번에 유입하는 attraction 공간. 헤이 그라운드 오피스 공간은 멤버쉽만 들어갈 수 있으므로, 대부분의 간단한 미팅은 1층 로비의 카페 '영춘'에서 가능. <br />
          ☂︎ : 건물 규모와 인원에 비해 카페공간이 크지 않으므로 11:30부터 오후 2시까지 붐빌때엔 전체 볼륨을 수용하지 못하기도 한다.
        </p>
      </Col>

      <Col xs={12} sm={12} md={6} lg={5} className='no-pm'>
        <img src={require('./02.jpg')} />
        <p>
          ▲ The flexiable zoning between Cafe and Restaurant.
        </p>
      </Col>

      <Col xs={12} sm={12} md={12} lg={10} className='no-pm'>
        <img src={require('./03.jpg')} />
        <b>
          ▲ Space information : 'Health Club' Organic Restaurant.
        </b>
      </Col>

      <Col xs={12} sm={12} md={12} lg={10} className='no-pm'>
        <img src={require('./04.jpg')} />
        <b>
          ▲ Space information : 'Health Club' Organic Restaurant.
        </b>
      </Col>

      <Col xs={12} sm={12} md={12} lg={10} className='no-pm'>
        <img src={require('./05.jpg')} />
        <b>▲ Space information : 1F Lobby - Entrance + media wall </b> <br />
        <p>
           ☀︎ : 메인 입구에서 들어오자마자 바로 볼 수 있는 screen으로 건물의 아이덴티티 전달이나 입주해 있는 기업들의 홍보 등등 수 많은 정보 전달이 손쉽게 가능하다. 더군다나 기다리는 동안 영상을 볼 수 있다. <br />
         ☂︎ : 용량과 규모에 대한 문제점이 시급하게 보여지는 부분은 출퇴근길에 갑자기 붐비는 코워커들의 용량을 두 대의 엘레베이터가 빠르게 수용하지 못하는데에도 문제가 있다. 위 사진에서 보여지는 것 처럼 엘레베이터 앞에서 참을성을 가지고 5분정도는 긴 줄에서 시간을 보내야 하는데, 출퇴근 자율제도가 생긴다면 이 문제도 해결 될 듯.
         During commuting time, people has to wait long time to get on a Elevator.
       </p>
      </Col>
    </Row>
  </Grid>
)

export default Writing1
