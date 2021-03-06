import React from 'react';
import './AddBandForm.css';

class AddBandForm extends React.Component {
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
        const inputValue = document.getElementById('bandInput').value;
        const selectPosition = this.state.position !== 'Select';
        const selectedPosition = this.state.position;
        let notRepeated = () => {
            let key = true;
            this.props.bands.forEach(element => {
                if (element.name === inputValue) {
                    key = false;
                    alert('Band already on the list.');
                }
            });
            return key;
        };

        if (inputValue.length && inputValue.length < 20 && selectPosition && notRepeated()) {
            this.props.inputBand(inputValue, selectedPosition);
            this.props.isFormActive(false);
        }
    }

    render() {
        const genres = this.props.genres.map(pos => {
            return (<option className="options" value={pos}>{pos}</option>)
        });

        if (!this.props.isActive === true) {
            return null;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="bandInput"
                        type="text"
                        placeholder="Add new band"
                        pattern="[a-zA-Z\s]{1,20}"
                        value={this.state.value}
                        onChange={this.handleNameChange}
                        required autoFocus></input>
                    <select className="select" value={this.state.position} onChange={this.handleOptionChange}>
                        <option className="options" value="Select">-Select a genre-</option>
                        {genres}
                    </select>
                    <button type="submit"
                        value="Add"
                    >
                        Add
                    </button>
                    <p>Insert a band. It should have between 1 and 20 characters.</p>
                </form>
            )
        }
    }
}

export default AddBandForm;