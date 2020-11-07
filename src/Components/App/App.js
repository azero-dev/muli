import React from 'react';
import './App.css';
import Header from '../Header/Header';
import List from '../List/List';
import AddGenreButton from '../AddGenreButton/AddGenreButton';
import AddGenreForm from '../AddGenreForm/AddGenreForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: ['Rock', 'Jazz', 'Pop'],
      bands: [ {name: 'Banda Name', position: 'Rock'} ],
      albums: [ {name: 'Album Name', position: ''} ],
      songs: [ {name: 'Song Name', position: 'Album Name'} ],
      genreFormActive: false,
    }
    this.isFormActive = this.isFormActive.bind(this);
    this.addingGenre = this.addingGenre.bind(this);
  }


  isFormActive(tw) {
    this.setState({ genreFormActive: tw });
  }

  addingGenre(tw) {
    this.setState({ genres: this.state.genres.concat(tw) });
  }

  render() {
    return (
      <div>
        <Header />
        <div id="back-body">

          <div id="back">
            <div id="main-canvas">
              <div id="button-list">
                <AddGenreButton onFormStatus={this.isFormActive} isActive={this.state.genreFormActive} />
              </div>
              <div>
                <ul key="listOfGenres" id="listRoot" className="list-canvas">
                {/* Check this ID, maybe remove it if not used */}
                  <List list={this.state.genres} />
                </ul>
              </div>
            </div>

            <div id="side-layer">
              <p>Welcome to the Muli app. This tool is under development and just started, but it's already published so everyone can follow up the way I develop it.</p>
              <p>For more information, please go to my <a href="https://github.com/azero-dev/muli">GitHub</a> and check all the work. I'm developing this webapp at the same time that I do other works, so there will not be great advances on a daily basis. However, it serves as a sample of my knowledge in different tools and libraries such as React.</p>
            </div>
          </div>

          <div id="lower-box">
            <div id="logo">
              <p id="logo-firt">MUSIC LIST</p>
              <p id="logo-second">V 0.1</p>
            </div>
            <div id="form-box">
              <div id="inside-form">
                <AddGenreForm
                  isActive={this.state.genreFormActive}
                  inputGen={this.addingGenre}
                  isFormActive={this.isFormActive} />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
