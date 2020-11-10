import React from 'react';
import './AddGenreForm.css';

class AddGenreForm extends React.Component {
    constructor(props) {
        super(props);
        this.setNewGen = this.setNewGen.bind(this);
    }

    setNewGen() {
        const inputValue = document.getElementById('genreInput').value;
        if (inputValue.length && inputValue.length < 20) {
            this.props.inputGen(inputValue);
            this.props.isFormActive(false);
        }
    }

    render() {
        if (!this.props.isActive === true) {
            return null;
        } else {
            return (
                <form>
                    <input
                        id="genreInput"
                        type="text"
                        placeholder="Add new genre"
                        pattern="[a-zA-Z\s]{1,20}"
                        required autoFocus></input>
                    <button type="button"
                        value="Add"
                        onClick={this.setNewGen}
                        >
                        Add
                    </button>
                    <p>Insert a genre. It should have between 1 and 20 characters.</p>
                </form>
            )
        }
    }
}

export default AddGenreForm;