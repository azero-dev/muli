import React from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="back-body">

          <div id="main-canvas">
            <div id="button-list"></div>
            <div id="lists-canvas"></div>
          </div>

          <div id="side-layer">
            <p>Welcome to the Muli app. This tool is under development and just started, but it's already published so everyone can follow up the way I develop it.</p>
            <p>For more information, please go to my <a href="https://github.com/azero-dev/muli">GitHub</a> and check all the work. I'm developing this webapp at the same time that I do other works, so there will not be great advances on a daily basis. However, it serves as a sample of my knowledge in different tools and libraries such as React</p>
          </div>
          
          <div id="lower-box">
            <div id="logo">
              <p id="logo-firt">MUSIC LIST</p>
              <p id="logo-second">V 0.1</p>
            </div>
            <div id="form-box">
              <div id="inside-form">
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
