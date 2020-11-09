import React from 'react';
import './AddBandButton.css';

class AddBandButton extends React.Component {
    constructor(props) {
        super(props);
        this.switchButton = this.switchButton.bind(this);
    }

    switchButton() {
        if (this.props.isActive === true) {
            this.props.onFormStatus(false);
        } else {
            this.props.onFormStatus(true);
            this.props.isGenreFormActive(false);
        }
    }

    render() {
        return (
            <button onClick={this.switchButton}>Add band</button>
        )
    }
}

export default AddBandButton;