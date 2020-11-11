import React from 'react';
import './Delete.css';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const positionSelection = this.props.selection;
        const from = this.props.from;
        const level = this.props.place;
        this.props.handleDelete(positionSelection, from, level);
    }

    render() {
        return (
            <div className="delSty" onDoubleClick={this.handleClick} > •</div>
        )
    }
}

export default Delete;