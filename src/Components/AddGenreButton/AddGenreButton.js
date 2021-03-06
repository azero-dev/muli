import React from 'react';
import './AddGenreButton.css';

class AddGenreButton extends React.Component {
    constructor(props) {
        super(props);
        this.switchButton = this.switchButton.bind(this);
    }

    switchButton() {
        if (this.props.isActive === true) {
            this.props.onFormStatus(false);
        } else {
            this.props.onFormStatus(true);
            this.props.isBandFormActive(false);
            this.props.isAlbumFormActive(false);
            this.props.isSongFormActive(false);
        }
    }

    render() {
        return (
            <button onClick={this.switchButton}>Genre</button>
        )
    }
}

export default AddGenreButton;