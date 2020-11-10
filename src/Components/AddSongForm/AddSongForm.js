import React from 'react';
import './AddSongForm.css';

class AddSongForm extends React.Component {
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
        const inputValue = document.getElementById('songInput').value;
        const selectPosition = this.state.position !== 'Select';
        const selectedPosition = this.state.position;
        let notRepeated = () => {
            let key = true;
            this.props.songs.forEach(element => {
                if (element.name === inputValue) {
                    key = false;
                    alert('Song already on the list.');
                }
            });
            return key;
        };

        if (inputValue.length && inputValue.length < 30 && selectPosition && notRepeated()) {
            this.props.inputSong(inputValue, selectedPosition);
            this.props.isFormActive(false);
        }
    }

    render() {
        const albums = this.props.albums.map(pos => {
            return (<option className="options" value={pos.name}>{pos.name}</option>)
        });

        if (!this.props.isActive === true) {
            return null;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="songInput"
                        type="text"
                        placeholder="Add new song"
                        pattern="[a-zA-Z\s]{1,30}"
                        value={this.state.value}
                        onChange={this.handleNameChange}
                        required autoFocus></input>
                    <select className="select" value={this.state.position} onChange={this.handleOptionChange}>
                        <option className="options" value="Select">-Select an album-</option>
                        {albums}
                    </select>
                    <button type="submit"
                        value="Add"
                    >
                        Add
                    </button>
                    <p>Insert a song. It should have between 1 and 30 characters.</p>
                </form>
            )
        }
    }
}

export default AddSongForm;