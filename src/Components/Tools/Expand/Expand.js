import React from 'react';
import './Expand.css';

class Expand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "- "
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const ide = this.props.ide;
        const element = document.getElementById(ide).style.maxHeight;

        if (element === ""|| element === "1000px") {
            document.getElementById(ide).style.maxHeight = 0;
            document.getElementById(ide).style.overflow = "hidden";
            this.setState({position: "+ "});
        } else if (element === "0px") {
            document.getElementById(ide).style.maxHeight = "1000px";
            setTimeout(() => {document.getElementById(ide).style.overflow = "auto"}, 200);
            this.setState({position: "- "});
        }
    }

    render() {
        return (
            <div className="expander" onClick={this.handleClick}>{this.state.position}</div>
        )
    }
}

export default Expand;