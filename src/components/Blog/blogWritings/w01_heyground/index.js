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
  folder: 'w01_heyground',
  title: 'HEY GROUND',
  icon: 'OFFICE, COMMUNITY',
  sub: 'Co-working space for Social entrepreneurs and Change makers in Seoul, South Korea',
  place: 'Seong-Su, Seoul',
  date: '2017. Octorber'
}

// make Upcycle component
const Heyground = () => (
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
            2017년 늦 가을, 서울 성수동에 새로 문을 연 HEY GROUND ! 지하 1층 부터 ROOF TOP FLOOR인 8층까지 공유 사무실인 이 곳은, 작은 1인 기업부터 큰 기업까지 아우르는 체인지 메이커들을 위한 코워킹 공간이다. 코워킹 스페이스에서 가장 중요한 부분은 각 객체들이 우연하게 마주칠 수 있는 common area가 가장 중요하다. 그 중에서도 물리적인 위치 때문에 가장 활발한 활동이 일어나는 1F Lobby공간과 이와 자연스럽게 얽혀있는 카페, 레스토랑, shop등의 Service program의 기획과 배치를 살펴보자. <br />
            <small>
              Photographer : EJay Kim  /
              Writing : EJay Kim
              <br /><br />
            </small>
          </p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col xs={12} lg={10} className='no-pm' />

      <Col xs={12} sm={12} md={6} lg={5} className='no-pm'>
        <img alt='' src={require('./01.jpg')} />
        <p className='pr-3'>
          ▲ Space information : 'Young Chun' Cafe and Bar
          <br /><br />
          ☀︎ : 가로변에서 카페와 바로 이어진 입구로 멤버쉽과 비멤버쉽을 한꺼번에 유입하는 attraction 공간. 헤이 그라운드 오피스 공간은 입주자에게만 열려있는 공간으로, 대부분의 간단한 미팅은 1층 로비의 카페 '영춘'에서 자연스럽게 이루어진다. <br />
          ☂︎ : 그러나 건물 규모와 인원에 비해 카페볼륨이 크지 않아 점심 이전 - 이후로 붐빌때엔 전체 볼륨을 종종 수용하지 못한다.
        </p>
        <br />
      </Col>

      <Col xs={12} sm={12} md={6} lg={5} className='no-pm'>
        <img alt='' src={require('./02.jpg')} />
        <p>
          ▲ The flexiable zoning between Cafe and Restaurant. <br /> <br />
          레스토랑과 카페를 구분짓는 낮은 소파가 공간을 구획하면서도 공간 규모가 확장되어야 할 상황까지 함께 아우른다. 공간을 좀 더 구분지어야 할 때엔 커튼을 이용한다.
        </p>
        <br />
      </Col>

      <Col xs={12} sm={12} md={12} lg={10} className='no-pm'>
        <img alt='' src={require('./03.jpg')} />
        <p>
          ▲ Space information : 'Health Club' Organic food  Restaurant.
          <br /><br />
        </p>
      </Col>

      <Col xs={12} sm={12} md={12} lg={10} className='no-pm'>
        <img alt='' src={require('./04.jpg')} />
        <p>
          ▲ Space information : 'Health Club' Organic food  Restaurant.
          <br /><br />
        </p>
      </Col>

      <Col xs={12} sm={12} md={12} lg={10} className='no-pm'>
        <img alt='' src={require('./05.jpg')} />
        <p>
          ▲ Space information : 1F Lobby - Entrance + media wall
          <br /> <br />
          ☀︎ : Main Entrance에서 들어오자마자 엘레베이터 벽면쪽에 설치된 대형 screen으로 건물의 아이덴티티 전달 및 입주 기업들의 홍보 등등의 정보 전달이 손쉽게 가능. <br />
          ☂︎ : 전체 건물 규모에 비해 단 두대의 엘레베이터 용량에 대한 문제 해결이 시급. 출퇴근길에 갑자기 몰려드는 코워커들에게 대체 가능한 수직동선이 필요할 듯. <br /><br />
        </p>
      </Col>



      <Col md={4} lg={4} className='hide-xs-sm'>
        <div className='pr-2 pt-5'>
          <div className='underline'>
            FLOOR INFORMATION
          </div>
          <small>
            B1 F ] &nbsp; Conference Hall <br />
            1  &nbsp; F &nbsp; ] &nbsp; Information, Cafeteria<br />
            2-5F ] &nbsp; Private Office - M , L <br />
            6-7F ] &nbsp; Private office - S / Hot Desk<br />
            8  &nbsp; F &nbsp; ] &nbsp; Rooftop Lounge
          </small>
        </div>
      </Col>


      <Col xs={12} md={8} lg={6} className='no-pm'>
        <img alt='' src={require('./06.jpg')} />
      </Col>

      <Col xs={12} className='show-xs-sm' >
        <div className='underline'>
          FLOOR INFORMATION
        </div>
        <small>
          B1 F ] &nbsp; Conference Hall <br />
          1  &nbsp;  &nbsp; F  ] &nbsp; Information, Cafe & Restaurant<br />
          2-5F ] &nbsp; Private Office - M , L <br />
          6-7F ] &nbsp; Private office - S / Individual Desk<br />
          8  &nbsp; &nbsp;  F ] &nbsp; Rooftop Lounge
        </small>
        </Col>

      </Row>
    </Grid>
    )

export default Heyground
