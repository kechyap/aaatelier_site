// Import the things from other people in node_modules
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import things we made ourselves
import logo from './logo.svg';

import icon_email from './icon/icon_email.svg';
import icon_facebook from './icon/icon_facebook.svg';
import icon_insta from './icon/icon_insta.svg';
import icon_kakao from './icon/icon_kakao.svg';

import './App.css';

// Make an App Component
class App extends React.Component {

  // All data and settings for this App Component
  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          folderName:  'PF_01_Seam',
          date:        'february 2018',
          title:       'SEAM CENTER',
          text:        'co-working and co-living space ',
          color:       'rgba(250, 189, 52)',
          photoAmount: ['01','02','03','04','05']
        },
        {
          folderName:  'PF_02_POPS',
          date:        '2017',
          title:       'P.O.P.S FORUM',
          text:        'Private Owned Public Space',
          color:       'rgba(250, 189, 52)',
          photoAmount: ['01','02','03','04']
        },
        {
          folderName:  'PF_03_Grill',
          date:        'august 2017',
          title:       'GRILL BAG',
          text:        'restaurant, social issue',
          color:       'rgba(250, 189, 52)',
          photoAmount: ['01','02','03','04']
        }
      ]
    }
  }

  // Rendering this App Component
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Art and Architecture Atelier </h1>
          <p className="App-intro" font-size="0.5rem">
            #human #future #lifestyle #brading #space_identity <br/>
            #social_issue #community #common_space #co-living #co-working <br/>
            #environmental_issue #upcycle #urban_issue #public_space #POPS
          </p>
          <div>
            <img src={icon_email} className="icon" alt="email" />
            <img src={icon_facebook} className="icon" alt="facebook" />
            <img src={icon_insta} className="icon" alt="insta" />
            <img src={icon_kakao} className="icon" alt="kakao" />
          </div>
        </header>

        <Grid fluid>
          <Row>

            {this.state.projects.map((x) =>
              <Col xs={12} sm={6} md={4} xl={3}>

                <div style={{color: x.color, paddingTop:"2rem"}}>
                  {x.title}
                </div>

                <div style={{color:"rgb(128, 107, 80)", fontSize: "0.7rem" , paddingBottom: "0.3rem"}}>
                  {x.text}
                </div>

                <Carousel showThumbs={false} infiniteLoop={true}>
                  {x.photoAmount.map((y) =>
                    <div>
                      <img src={require(`./${x.folderName}/${y}.png`)} />
                    </div>
                  )}
                </Carousel>

              </Col>
            )}

          </Row>
        </Grid>
      </div>
    );
  }
}

// Export the App Component so we can import it in other files
export default App;
