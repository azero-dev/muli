import React from 'react';
import './AddGenreForm.css';

class AddGenreForm extends React.Component {
    constructor(props) {
        super(props);
        this.setNewGen = this.setNewGen.bind(this);
    }

    setNewGen() {
        const inputValue = document.getElementById('genreInput').value;
        console.log(inputValue);
        this.props.inputGen(inputValue);
        this.props.isFormActive(false);
    }

    render() {
        if (!this.props.isActive === true) {
            return (
                <div></div>
            );
        } else {
            return (
                <form>
                    <input
                        id="genreInput"
                        type="text"
                        placeholder="Add new genre"
                        pattern="[a-zA-Z]{1,20}"
                        required autoFocus></input>
                    <button type="button"
                        value="Add"
                        onClick={this.setNewGen}
                        >
                        Add
                    </button>
                </form>
            )
        }
    }
}

export default AddGenreForm;