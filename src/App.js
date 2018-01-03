// Import the things from other people in node_modules
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import things we made ourselves
import logo from './logo.svg';
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
          title:       'Seam center',
          text:        'co-working and co-living space ',
          color:       'rgba(250, 189, 52)',
          photoAmount: ['01','02','03','04','05']
        },
        {
          folderName:  'PF_02_POPS',
          date:        '2017',
          title:       'POPS',
          text:        'Private Owned Public Space',
          color:       'rgba(250, 189, 52)',
          photoAmount: ['01','02','03','04']
        },
        {
          folderName:  'PF_03_Grill',
          date:        'august 2017',
          title:       'Grill Bag Restaurant',
          text:        'I did branding and stuff for this beautiful restaurant.',
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
          <p className="App-intro" font-size="0.6rem">
            #human #future #lifestyle #brading #space_identity <br/>
            #community #common_space #co-living #co-working <br/>
            #environmental_issue #upcycle #urban_issue #public_space #POPS
          </p>
        </header>

        {/* //* projects loop, do the same layout for each project */}
        {/* // (this.state.projects is an array, so map does something for each item in the array) */}
        {this.state.projects.map((x) =>
          <div>
            <div style={{color: x.color}}>
              {x.title}
            </div>
            <div>{x.text}</div>

            {/* make a carousel for each project */}
            <Carousel>
              {/* //* Do something 4 times (map always does something for each item in an array, so I just made an array with four items, lol) */}
              {x.photoAmount.map((y) =>
                <div>
                  {/* //* folder name for image is the project.codename, and file name is the i variable made by map */}
                  <img src={require(`./${x.folderName}/${y}.png`)} />
                  <p> {x.title} </p>
                </div>
              )}
            </Carousel>

          </div>
        )}
      </div>
    );
  }
}

// Export the App Component so we can import it in other files
export default App;
