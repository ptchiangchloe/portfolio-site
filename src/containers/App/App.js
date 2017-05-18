import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {Row, Column, ButtonGroup, Link, Colors} from 'react-foundation';
import {MyName} from 'containers/Home/Home.style';
import DocumentTitle from 'react-document-title';

class App extends Component {
  render() {
    return (
      <DocumentTitle title='HÀNYǓ'>
        <div>
          <Particles params={{
              		particles: {
                    "number": {
                      "value": 200,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    size: {
                      "value": 20,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 180,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
              			line_linked: {
                      "enable": true,
                      "distance": 250,
                      "color": "#000",
                      "opacity": 1,
                      "width": 2,
              				shadow: {
              					enable: true,
              					color: "#FF1493",
              					blur: 0
              				}
              			}
              		}
                }} />
          {this.props.children}
        </div>
     </DocumentTitle>


    );
  }
}

export default App;
