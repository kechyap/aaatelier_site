// Import the things from other people in node_modules
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import things we made ourselves
//import logo from './logo.svg';
import logo_white from './icon/logo_white.svg'

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
        [
          {
            folderName:  'PF_01_Seam',
            date:        'february 2018',
            title:       'SEAM CENTER',
            text:        'co-working and co-living space ',
            color:       'rgba(255, 255, 255, 0.9)',
            photoAmount: ['01','02','03','04','05']
          },
          {
            folderName:  'PF_02_POPS',
            date:        '2017',
            title:       'P O P S FORUM',
            text:        'Private Owned Public Space',
            color:       'rgba(255, 255, 255, 0.9)',
            photoAmount: ['01','02','03','04']
          }
        ],

        [
          {
            folderName:  'PF_03_Grill',
            date:        'august 2017',
            title:       'GRILL BAG',
            text:        'social issue, restaurant',
            color:       'rgba(255, 255, 255, 0.9)',
            photoAmount: ['01','02','03','04']
          }
        ],

        [
          {
            folderName:  'PF_03_Grill',
            date:        'august 2017',
            title:       'GRILL BAG',
            text:        'social issue, restaurant',
            color:       'rgba(255, 255, 255, 0.9)',
            photoAmount: ['01','02','03','04']
          }
        ]
      ]
    }
  }



  // Rendering this App Component
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo_white} className="App-logo" alt="logo" />
          <h1 className="App-title"> AAAtelier</h1>
          <h4 className="App-sub">  Art and Architecture Atelier  </h4>
          <p className="App-intro" style={{paddingRight:"6rem" , paddingLeft:"6rem"}}>
            #human #future #lifestyle #brading #space_identity
            #social_issue #community #common_space #co-living #co-working
            #environmental_issue #upcycle #urban_issue #public_space #POPS
          </p>

          <div>
            <a href="aaatelier@ejay.kim">
              <img src={icon_email} className="icon" alt="email" />
            </a>

            <a href="www.facebook.com/kechyap">
              <img src={icon_facebook} className="icon" alt="facebook" />
            </a>

            <a href="www.instagram.com/aaatelier_ejay">
              <img src={icon_insta} className="icon" alt="insta" />
            </a>

              <img src={icon_kakao} className="icon" alt="kakao" />
          </div>
        </header>

        <Grid fluid>
          <Row>
            {this.state.projects.map((project_set) =>
              <Col xs={12} sm={6} lg={4}>
                {project_set.map((x) =>
                  <div>

                    <h4 style={{color: x.color, marginTop:"0.9rem" , marginBottom:"0rem"}}>
                      {x.title}
                    </h4>

                    <div style={{color:"rgba(255, 255, 255, 0.7)", fontSize: "0.8rem", fontWeight:"300", paddingBottom: "0.3rem"}}>
                      {x.text}
                    </div>

                    <Carousel showThumbs={false} infiniteLoop={true} swipeScrollTolerance={20}>
                      {x.photoAmount.map((y) =>
                        <div>
                          <img src={require(`./${x.folderName}/${y}.png`)} />
                        </div>
                      )}
                    </Carousel>

                  </div>
                )}
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
