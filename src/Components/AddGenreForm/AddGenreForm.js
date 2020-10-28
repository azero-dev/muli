import React from 'react';
import './AddGenreForm.css';

class AddGenreForm extends React.Component {
    render() {
        if (!this.props.isActive == true) {
            return (
                <div></div>
            );
        } else {
            return (
                <div>
                    <input placeholder="Insert genre"></input>
                </div>
            )
        }
    }
}

export default AddGenreForm;