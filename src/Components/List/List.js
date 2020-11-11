import React from 'react';
import './List.css';
import BandList from '../BandList/BandList';
import Expand from '../Tools/Expand/Expand';
import Delete from '../Tools/Delete/Delete';

class List extends React.Component {

    render() {
        const deleteSelector = this.props.list;
        return (
            this.props.list.map((gen, index) => {
                return (
                    <li key={index} >
                        <Expand ide={gen + 1} />
                        {gen}
                        <Delete
                            selection={index}
                            from={deleteSelector}
                            place="genres"
                            handleDelete={this.props.handleDelete}
                        />
                        <ol id={gen + 1} className="expandIt" >
                            <BandList
                                bandSort={gen}
                                allMusic={this.props.allMusic}
                                handleDelete={this.props.handleDelete}
                            />
                        </ol>
                    </li>
                )
            })
        )
    }
}

export default List;