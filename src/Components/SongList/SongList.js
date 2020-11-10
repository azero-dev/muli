import React from 'react';
import './SongList.css';

class SongList extends React.Component {

    render() {
        const songSorted = this.props.songSort;
        let theSongs = this.props.allMusic.songs;
        return (
            <>
                {theSongs.map(element => {
                    if (element.position === songSorted) {
                        return (<li key={element.name+4} id={element.name+4} className="songList">
                                    {element.name}
                                </li>)
                    }
                    return null;
                })}
            </>
        )
    }
}

export default SongList;