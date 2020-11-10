import React from 'react';
import './BandList.css';
import AlbumList from '../AlbumList/AlbumList';

class BandList extends React.Component {

    render() {
        const theBandSorted = this.props.bandSort;
        let theBands = this.props.allMusic.bands;
        return (
            <>
                {theBands.map(element => {
                    if (element.position === theBandSorted) {
                        return (<li className="bandList">
                                    {element.name}
                                    <ol id={element.name} >
                                        <AlbumList 
                                            albumSort={element.name}
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

export default BandList;