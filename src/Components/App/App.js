import React from 'react';
import './App.css';
import Header from '../Header/Header';
import List from '../List/List';
import AddGenreButton from '../AddGenreButton/AddGenreButton';
import AddGenreForm from '../AddGenreForm/AddGenreForm';
import AddBandButton from '../AddBandButton/AddBandButton';
import AddBandForm from '../AddBandForm/AddBandForm';
import AddAlbumButton from '../AddAlbumButton/AddAlbumButton';
import AddAlbumForm from '../AddAlbumForm/AddAlbumForm';
import AddSongButton from '../AddSongButton/AddSongButton';
import AddSongForm from '../AddSongForm/AddSongForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: ['Rock', 'Blues', 'Bossa Nova'],
      bands: [
        { name: 'Led Zappelin', position: 'Rock' },
        { name: 'B.B. King', position: 'Blues' },
        { name: 'Caetano Veloso', position: 'Bossa Nova' },
      ],
      albums: [
        { name: 'Presence', position: 'Led Zappelin' },
        { name: 'There Must Be a Better World Somewhere', position: 'B.B. King' },
        { name: 'Transa', position: 'Caetano Veloso' },
      ],
      songs: [
        { name: 'Achilles Last Stand', position: 'Presence' },
        { name: 'For Your Life', position: 'Presence' },
        { name: 'Royal Orleans', position: 'Presence' },
        { name: 'The Victim', position: 'There Must Be a Better World Somewhere' },
        { name: 'More, More, More', position: 'There Must Be a Better World Somewhere' },
        { name: "You're Going with Me", position: 'There Must Be a Better World Somewhere' },
        { name: "Life Ain't Nothing But a Party", position: 'There Must Be a Better World Somewhere' },
        { name: 'Born Again Human', position: 'There Must Be a Better World Somewhere' },
        { name: 'There Must Be a Better World Somewhere', position: 'There Must Be a Better World Somewhere' },
        { name: 'You Dont Know Me', position: 'Transa' },
        { name: 'Nine Out of Ten', position: 'Transa' },
        { name: 'Triste Bahia', position: 'Transa' },
      ],
      // Check display status
      genreFormActive: false,
      bandFormActive: false,
      albumFormActive: false,
      songFormActive: false,
    }
    // Binding forms
    this.isFormActive = this.isFormActive.bind(this);
    this.isBandFormActive = this.isBandFormActive.bind(this);
    this.isAlbumFormActive = this.isAlbumFormActive.bind(this);
    this.isSongFormActive = this.isSongFormActive.bind(this);
    // Biding methods
    this.addingGenre = this.addingGenre.bind(this);
    this.addingBand = this.addingBand.bind(this);
    this.addingAlbum = this.addingAlbum.bind(this);
    this.addingSong = this.addingSong.bind(this);
    //Bidding delete
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Change display forms
  isFormActive(tw) {
    this.setState({ genreFormActive: tw });
  }
  isBandFormActive(tw) {
    this.setState({ bandFormActive: tw });
  }
  isAlbumFormActive(tw) {
    this.setState({ albumFormActive: tw });
  }
  isSongFormActive(tw) {
    this.setState({ songFormActive: tw });
  }

  // Add info
  addingGenre(tw) {
    this.setState({ genres: this.state.genres.concat(tw) });
  }
  addingBand(tw, tp) {
    this.setState({ bands: [...this.state.bands, ...[{ name: tw, position: tp }]] });
  }
  addingAlbum(tw, tp) {
    this.setState({ albums: [...this.state.albums, ...[{ name: tw, position: tp }]] });
  }
  addingSong(tw, tp) {
    this.setState({ songs: [...this.state.songs, ...[{ name: tw, position: tp }]] });
  }

  // Delete
  handleDelete(tw, tp, th) {
    const position = tw;
    const from = tp;
    const inState = th;
    console.log(from);
    
    this.setState({
      [inState]: from.filter((element, index) => {
        return index !== position;
      })
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div id="back-body">

          <div id="back">
            <div id="main-canvas">
              <div id="button-list">
                <AddGenreButton
                  onFormStatus={this.isFormActive}
                  isActive={this.state.genreFormActive}
                  isBandFormActive={this.isBandFormActive}
                  isAlbumFormActive={this.isAlbumFormActive}
                  isSongFormActive={this.isSongFormActive} />
                <AddBandButton
                  onFormStatus={this.isBandFormActive}
                  isActive={this.state.bandFormActive}
                  isGenreFormActive={this.isFormActive}
                  isAlbumFormActive={this.isAlbumFormActive}
                  isSongFormActive={this.isSongFormActive} />
                <AddAlbumButton
                  onFormStatus={this.isAlbumFormActive}
                  isActive={this.state.albumFormActive}
                  isGenreFormActive={this.isFormActive}
                  isBandFormActive={this.isBandFormActive}
                  isSongFormActive={this.isSongFormActive} />
                <AddSongButton
                  onFormStatus={this.isSongFormActive}
                  isActive={this.state.songFormActive}
                  isGenreFormActive={this.isFormActive}
                  isBandFormActive={this.isBandFormActive}
                  isAlbumFormActive={this.isAlbumFormActive}
                />
              </div>
              <div>
                <ol key="listOfGenres" id="listRoot" className="list-canvas">
                  {/* Check this ID, maybe remove it if not used */}
                  <List
                    list={this.state.genres}
                    allMusic={this.state}
                    handleDelete={this.handleDelete} />
                </ol>
              </div>
            </div>

            <div id="side-layer">
              <p>Welcome to the <span className="redHighlight">Muli App</span> v.1.0. Here you can create easily your own list of music.</p>
              <p>It's pretty simple, just click on one of the buttoms at the top and fill the form out to add new music. To remove an element, DOUBLE click the dot at the element's right side. Pressing on the dash at the left side of the element you'll close or open the list.</p>
              <p>For more information, please go to my <a href="https://github.com/azero-dev/muli">GitHub</a> and check out all the work. Should you wish to report a problem, you could always <a href="https://inferente.com/contact/">send me a message</a>.</p>
            </div>
          </div>

          <div id="lower-box">
            <div id="logo">
              <p id="logo-firt">MUSIC LIST</p>
              <p id="logo-second">V 1.0</p>
            </div>
            <div id="form-box">
              <div id="inside-form">
                <AddGenreForm
                  isActive={this.state.genreFormActive}
                  inputGen={this.addingGenre}
                  isFormActive={this.isFormActive} />
                <AddBandForm
                  genres={this.state.genres}
                  bands={this.state.bands}
                  isActive={this.state.bandFormActive}
                  inputBand={this.addingBand}
                  isFormActive={this.isBandFormActive} />
                <AddAlbumForm
                  bands={this.state.bands}
                  albums={this.state.albums}
                  isActive={this.state.albumFormActive}
                  inputAlbum={this.addingAlbum}
                  isFormActive={this.isAlbumFormActive} />
                <AddSongForm
                  albums={this.state.albums}
                  songs={this.state.songs}
                  isActive={this.state.songFormActive}
                  inputSong={this.addingSong}
                  isFormActive={this.isSongFormActive}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
