import React from 'react';
import './AddGenreButton.css';

class AddGenreButton extends React.Component {
    constructor(props) {
        super(props);
        this.switchButton = this.switchButton.bind(this);
    }

    switchButton() {
        if (this.props.isActive == true) {
            this.props.onFormStatus(false);
        } else {
            this.props.onFormStatus(true);
        }
    }

    render() {
        return (
            <button onClick={this.switchButton}>Add genre</button>
        )
    }
}

export default AddGenreButton;