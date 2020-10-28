import React from 'react';
import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul id="list-canvas">
                <li>{
                    Object.keys(this.props.list).map(gen => {
                        return <li>{gen}</li>;
                    })
                }</li>
            </ul>
        )
    }
}

export default List;