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
import './06.jpg'

// make data

const project = {
  folder: 'Writing1',
  title: 'HEY GROUND',
  icon: 'OFFICE, COMMUNITY',
  sub: 'Co-working space for Social entrepreneurs & Change makers',
  place: 'Seoul, South Korea',
  date: '2017. Octorber'
}

// make Upcycle component
const Writing1 = () => (
  <Grid fluid>
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
          <h4>The Space planning and program for the 1st floor in Creative office building.</h4>
          <p>
          2017년 늦 가을, 서울 성수동에 새로 문을 연 HEY GROUND ! 지하 1층 부터 ROOF TOP FLOOR인 8층까지 공유 사무실인 이 곳은, 작은 1인 기업부터 큰 기업까지 아우르는 체인지 메이커들을 위한 코워킹 공간입니다. 단독 사무실과 다르게 코워킹 스페이스에서 가장 중요한 부분은 각 객체들이 우연하게 만날수 있는 common area가 가장 중요한데, 그 중에서도 물리적 위치 때문에 가장 활발한 활동이 일어나는 Lobby, 이와 자연스럽게 얽혀있는 카페, 레스토랑, shop등의 서비스 프로그램 플래닝이 핵심이라고 볼 수 있습니다. <br />
            <small>
                Photographer : EJay Kim  /
                Writing : EJay Kim
            </small>
          </p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col xs={12} lg={10} className='no-pm' />

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
          ☀︎ : Main Entrance에서 들어오자마자 엘레베이터 벽면쪽에 설치된 대형 screen으로 건물의 아이덴티티 전달 및 입주 기업들의 홍보 등등의 정보 전달이 손쉽게 가능. <br />
         ☂︎ : 전체 건물 규모에 비해 단 두대의 엘레베이터 용량에 대한 문제 해결이 시급하다. 출퇴근길에 갑자기 몰려드는 코워커들에게 대체 가능한 수직동선이 필요할 듯.
       </p>
      </Col>

      <Col xs={12} md={8} lg={7} className='no-pm'>
        <img src={require('./06.jpg')} />
      </Col>

      <Col xs={12} md={4} lg={3} >
        <div className='show-xs-sm'>
          <small>
            <b> FLOOR INFORMATION </b> <br />
         [ B1F ] Conference hall <br />
         [ 1F ] Information desk, Cafe and Restaurant<br />
         [ 2-5F ] Private Office ( L / M ) <br />
         [ 6-7F ] Private office  ( S ) / Individual Desk <br />
         [ 8F ] Rooftop Lounge
         </small>
        </div>

        <div className='hide-xs-sm'>
          <div className='pl-2'>
            <b> FLOOR INFORMATION </b>

            <hr />

            <small>
          B1 F ] &nbsp; Conference Hall <br />
          1 F &nbsp; &nbsp; ] &nbsp; Information, Cafe & Restaurant<br />
          2-5F ] &nbsp; Private Office - M , L <br />
          6-7F ] &nbsp; Private office - S / Individual Desk<br />
          8 F &nbsp;&nbsp; ] &nbsp; Rooftop Lounge
        </small>
          </div>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default Writing1
