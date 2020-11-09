import React from 'react';
import './List.css';
import BandList from '../BandList/BandList';

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
                        {gen}
                        <ol id={gen}> {/*Is this id necessary??  DELETE IT!! */}
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