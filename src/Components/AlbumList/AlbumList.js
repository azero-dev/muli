import React from 'react';
import './AlbumList.css';
import SongList from '../SongList/SongList';
import Expand from '../Tools/Expand/Expand';

class AlbumList extends React.Component {

    render() {
        const albumSorted = this.props.albumSort;
        let theAlbums = this.props.allMusic.albums;
        return (
            <>
                {theAlbums.map(element => {
                    if (element.position === albumSorted) {
                        return (<li key={element.name} className="albumList">
                            <Expand ide={element.name + 3} />
                            {element.name}
                            <ol key={element.name + 3} id={element.name + 3} className="expandIt" >
                                <SongList
                                    songSort={element.name}
                                    allMusic={this.props.allMusic}
                                />
                            </ol>
                        </li>)
                    }
                    return null;
                })}
            </>
        )
    }
}

export default AlbumList;