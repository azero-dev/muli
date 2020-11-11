import React from 'react';
import './SongList.css';
import Delete from '../Tools/Delete/Delete';

class SongList extends React.Component {

    render() {
        const songSorted = this.props.songSort;
        let theSongs = this.props.allMusic.songs;
        // Delete Comp.
        const deleteSelector = this.props.allMusic.songs;

        return (
            <>
                {theSongs.map((element, index) => {
                    if (element.position === songSorted) {
                        return (<li key={element.name + 4} id={element.name + 4} className="songList">
                            {element.name}
                            <Delete
                                selection={index}
                                from={deleteSelector}
                                place="songs"
                                handleDelete={this.props.handleDelete}
                            />
                        </li>)
                    }
                    return null;
                })}
            </>
        )
    }
}

export default SongList;