import React from 'react';
import './BandList.css';

class BandList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const theBandSorted = this.props.bandSort;
        let theBands = this.props.allMusic.bands;
        return (
            <>
                {theBands.map(element => {
                    if (element.position === theBandSorted) {
                        return (<li className="bandList">
                                    {element.name}
                                    <ol id={element.name+1} >
                                        {/* ALBUMLIST HERE */}
                                    </ol>
                                </li>)
                    }
                    return null;
                })}
            </>
        )
    }
}

export default BandList;