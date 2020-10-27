import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div id="menu">
                <p>
                    <a href="https://inferente.com/">
                        &#60;&#60; back
                    </a>
                </p>
            </div>
        )
    }
}

export default Header;