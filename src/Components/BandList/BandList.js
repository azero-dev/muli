import React from 'react';
import './BandList.css';
import AlbumList from '../AlbumList/AlbumList';
import Expand from '../Tools/Expand/Expand';
import Delete from '../Tools/Delete/Delete';

class BandList extends React.Component {

    render() {
        const theBandSorted = this.props.bandSort;
        let theBands = this.props.allMusic.bands;
        // Delete Comp.
        const deleteSelector = this.props.allMusic.bands;

        return (
            <>
                {theBands.map((element, index) => {
                    if (element.position === theBandSorted) {
                        return (
                            <li key={element.name} className="bandList">
                                <Expand ide={element.name + 2} />
                                {element.name}
                                <Delete
                                    selection={index}
                                    from={deleteSelector}
                                    place="bands"
                                    handleDelete={this.props.handleDelete}
                                />
                                <ol key={element.name + 2} id={element.name + 2} className="expandIt" >
                                    <AlbumList
                                        albumSort={element.name}
                                        allMusic={this.props.allMusic}
                                        handleDelete={this.props.handleDelete}
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