import React from 'react';
import './List.css';
import BandList from '../BandList/BandList';
import Expand from '../Tools/Expand/Expand';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.makeList = this.makeList.bind(this);
    }

    makeList() {
        // ADD LATER 
    }

    render() {
        return (
            this.props.list.map((gen, index) => {
                return (
                    <li key={index} >
                        <Expand ide={gen + 1} />
                        {gen}
                        <ol id={gen + 1} className="expandIt" >
                            <BandList
                                bandSort={gen}
                                allMusic={this.props.allMusic}
                            />
                        </ol>
                    </li>
                )
            })
        )
    }
}

export default List;