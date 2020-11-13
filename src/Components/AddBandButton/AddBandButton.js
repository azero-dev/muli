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
            this.props.isAlbumFormActive(false);
            this.props.isSongFormActive(false);
        }
    }

    render() {
        return (
            <button onClick={this.switchButton}>Band</button>
        )
    }
}

export default AddBandButton;