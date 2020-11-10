import React from 'react';
import './AddSongButton.css';

class AddSongButton extends React.Component {
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
            this.props.isBandFormActive(false);
            this.props.isAlbumFormActive(false);
        }
    }

    render() {
        return (
            <button onClick={this.switchButton}>Add song</button>
        )
    }
}

export default AddSongButton;