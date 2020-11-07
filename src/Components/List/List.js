import React from 'react';
import './List.css';

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
                            <ul id={gen}></ul>
                        </li>
                )
            })
        )
    }
}

export default List;