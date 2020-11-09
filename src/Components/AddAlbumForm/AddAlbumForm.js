import React from 'react';
import './AddAlbumForm.css';

class AddAlbumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: 'Select'
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleOptionChange(event) {
        this.setState({ position: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputValue = document.getElementById('albumInput').value;
        const selectPosition = this.state.position !== 'Select';
        const selectedPosition = this.state.position;
        let notRepeated = () => {
            let key = true;
            this.props.albums.forEach(element => {
                if (element.name === inputValue) {
                    key = false;
                    alert('Album already on the list.');
                }
            });
            return key;
        };

        if (inputValue.length && inputValue.length < 20 && selectPosition && notRepeated()) {
            this.props.inputAlbum(inputValue, selectedPosition);
            this.props.isFormActive(false);
        }
    }

    render() {
        const bands = this.props.bands.map(pos => {
            return (<option className="options" value={pos.name}>{pos.name}</option>)
        });

        if (!this.props.isActive === true) {
            return null;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="albumInput"
                        type="text"
                        placeholder="Add new album"
                        pattern="[a-zA-Z\s]{1,20}"
                        value={this.state.value}
                        onChange={this.handleNameChange}
                        required autoFocus></input>
                    <select className="select" value={this.state.position} onChange={this.handleOptionChange}>
                        <option className="options" value="Select">-Select a band-</option>
                        {bands}
                    </select>
                    <button type="submit"
                        value="Add"
                    >
                        Add
                    </button>
                    <p>Insert an album. It should have between 1 and 20 characters.</p>
                </form>
            )
        }
    }
}

export default AddAlbumForm;