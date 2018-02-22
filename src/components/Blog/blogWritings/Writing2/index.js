// import npm files & components
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import local files & components
import '../../index.css'

const project = {
  folder: 'Writing1',
  title: 'HEY GROUND',
  sub: 'Creative office building, Social business co working space',
  place: 'Seoul, South Korea',
  date: '2017'
}
// make Upcycle component
const Writing2 = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} lg={10} className='no-pm'>
        <hr />
      </Col>

      <Col xs={12} sm={4} lg={3}>
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
        <div>
          <p>
               ldkflsdj flsdl dslkjfl asdfladl fsdkf jsdjfh ldsafjlj dfdl fjldkjflkdj flksdlkflds lksdk fldfdfldj fljsdlfk sdlkfsldmfsd kfjlskdjf lks dlfks dlkfslkdfjlskdjl kjclskjdl kjkdfjkdj lskjdf lkjsldk fjsldkjflsk jdflk dfkjsd lakjlk sjdlfkj
          </p>

          <ul>
            <li> Photograph : EJay Kim </li>
            <li> Writing : EJay Kim </li>
          </ul>

        </div>
      </Col>
    </Row>

    <Row>
      <Col xs={12} lg={10} className='no-pm'>
          photosphotos

      </Col>

      <Col xs={12} sm={12} md={6} lg={5} className='no-pm' />
    </Row>
  </Grid>
  )

export default Writing2
