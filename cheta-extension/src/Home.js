/*global chrome*/
import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      uniqueCode: `<scan>`,
      inputs: {
        priceperword: '0.05'
      }
    }
  }

  nextTapped_det = () => {
    var config = {
      code: this.state.uniqueCode
    };

    if(this.state.inputs.priceperword > 0) {
      config['priceperword'] = this.state.inputs.priceperword;
    }

    var css = "@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap'); #cheta-flt-dv { padding: 8px; z-index: 999; position: fixed; width: 140px; bottom: 40%; right: 40px; background-color: #1D1D1D; color: white; border-radius: 20px; text-align: center; box-shadow: 2px 2px 3px #999; } .cheta-flt-p { margin: 2px; font-family: 'Avenir-Book'; font-size: 22px; } .cheta-pfnt { margin: 2px; font-family: 'Avenir-Book'; font-size: 14px; }";
    chrome.tabs.insertCSS({code: css});

    chrome.tabs.executeScript({
      file: 'jquery.js'
    });

    chrome.tabs.executeScript({
      code: 'var config = ' + JSON.stringify(config)
    }, function() {
      chrome.tabs.executeScript({
        file: 'chetalib/chetalib.js'
      });
    })

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    var inputs = this.state.inputs;
    inputs[name] = value;
    this.setState({
      inputs: inputs
    })
  }

  render() {
    return (
      <div>
        <div className="header">
        <svg className="logo" width="53px" height="37px" viewBox="0 0 53 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink">
            <title>Shape</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard" transform="translate(-27.000000, -21.000000)" fill="#BA86FC" fill-rule="nonzero">
                    <g id="text-(1)" transform="translate(27.000000, 21.000000)">
                        <path d="M9,21 L21,21 L15,5 L9,21 L9,21 Z M7.29361454,23.7854854 L2.54879383,36.1525886 C2.28745927,36.8337423 1.52478655,37.1735478 0.845316669,36.9115657 C0.165846785,36.6495837 -0.173118872,35.8850209 0.088215713,35.2038675 L13.269711,0.847055207 C13.7030245,-0.282351736 15.2969755,-0.282351736 15.7302891,0.847055207 L28.9117843,35.2038675 C29.1731188,35.8850209 28.8341532,36.6495837 28.1546833,36.9115657 C27.4752136,37.1735478 26.7125407,36.8337423 26.4512062,36.1525886 L21.7063854,23.7854854 L7.29361454,23.7854854 Z M50.1779168,18.2721015 C50.2526081,18.4334169 50.2941176,18.6120507 50.2941176,18.8 C50.2941176,18.9768023 50.2874601,19.150448 50.2742083,19.3209194 C50.2874674,19.5750917 50.2941176,19.8347987 50.2941176,20.1 L50.2941176,33.1 C50.2941176,33.8179702 50.89985,34.4 51.6470588,34.4 C52.3942677,34.4 53,34.9820298 53,35.7 C53,36.4179702 52.3942677,37 51.6470588,37 C50.2040353,37 48.9368952,36.2764195 48.2171825,35.1862629 C47.0012999,36.3094891 45.3492784,37 43.5294118,37 L38.1176471,37 C32.9186892,37 30,34.7564163 30,30.5 C30,26.0925359 32.6745217,24.7399746 39.9294418,23.3993917 C40.2110475,23.3473834 40.2110475,23.3473834 40.4915528,23.2953943 C41.6955268,23.0717342 42.4528075,22.9186098 43.2012754,22.7388146 C46.0111781,22.0638273 47.360364,20.9324285 47.5615715,19.2583738 C47.3048385,15.3645407 45.1853598,13.6 40.8235294,13.6 C36.0706933,13.6 34.0588235,14.888763 34.0588235,17.5 C34.0588235,18.2179702 33.4530912,18.8 32.7058824,18.8 C31.9586735,18.8 31.3529412,18.2179702 31.3529412,17.5 C31.3529412,13.1779037 34.7528361,11 40.8235294,11 C46.3147199,11 49.542525,13.529418 50.1779168,18.2721015 L50.1779168,18.2721015 Z M48,29.9789691 L48,23 C47.0026094,23.6805858 45.7429538,24.208211 44.2398213,24.5775753 C43.4258629,24.7775889 42.6232268,24.9436087 41.3649038,25.182729 C41.0794448,25.2368504 41.0794448,25.2368504 40.795701,25.2904556 C34.7684681,26.4297402 33,27.344614 33,29.9789691 C33,32.7389602 34.6036928,34 38.4545455,34 L43.9090909,34 C46.1684375,34 48,32.1997231 48,29.9789691 Z" id="Shape"></path>
                    </g>
                </g>
            </g>
        </svg>
        </div>
        <svg width="280px" height="2px" viewBox="0 0 280 2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink">
            <title>Line</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <g id="Artboard" transform="translate(0.000000, -81.000000)" stroke="#979797">
                    <line x1="0.25" y1="81.75" x2="280.75" y2="82.25" id="Line"></line>
                </g>
            </g>
        </svg>
        <h2>Instructions</h2>
        <p>1. Begin text with “{this.state.uniqueCode}”</p>
        <p>2. Type your message</p>
        <p>3. Enable extension to analyze text</p>
        
        <label class="switch">
          <input type="checkbox" onClick={this.nextTapped_det}></input>
          <span class="slider round"></span>
        </label>
        <h2>Enable extension</h2>
        <div className="footer">
          <p>Price per word (Optional): </p><input id="priceperwordInput" name="priceperword" value={this.state.inputs.priceperword} onChange={this.handleInputChange} type="number" step="0.01"/>
          <a href="https://juancurti.com" target="_blank"><p>Juan Curti - 2020</p></a>
        </div>
      </div>
    )
  };
}

export default Home;
