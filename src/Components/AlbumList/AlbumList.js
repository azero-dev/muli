import React from 'react';
import './AlbumList.css';

class AlbumList extends React.Component {

    render() {
        const albumSorted = this.props.albumSort;
        let theAlbums = this.props.allMusic.albums;
        return (
            <>
                {theAlbums.map(element => {
                    if (element.position === albumSorted) {
                        return (<li className="albumList">
                                    {element.name}
                                    <ol id={element.name+1} >
                                        {/* Nothing yet */}
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