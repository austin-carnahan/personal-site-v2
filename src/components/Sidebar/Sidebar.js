import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return(
            <div className='sidebar'>
                <ul>
                    <li>
                        <a className="github" target="_blank" rel="noopener noreferrer" href="https://github.com/austin-carnahan">
                            <FontAwesomeIcon id="github-icon" icon={["fab", "github"]}/>
                        </a>
                    </li>
                    <li>
                        <a className="linkedin" target="_blank" rel="noopener noreferrer" href="https://github.com/austin-carnahan">
                            <FontAwesomeIcon id="linkedin-icon" icon={["fab", "linkedin"]}/>
                        </a>
                    </li>
                    <li>
                        <a className="email" target="_blank" rel="noopener noreferrer" href="ac6404@gmail.com">
                            <FontAwesomeIcon id="linkedin-icon" icon="envelope"/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar