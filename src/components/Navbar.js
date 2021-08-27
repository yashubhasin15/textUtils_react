import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Header(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                    </li>
                    <li className="nav-item">
                    {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
                    </li>
                </ul>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
                </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

Header.propTypes={
    //by specifying its type, we will get a warning in the console if we input a value of mismatching data type. and by using
    // isRequired, we will get a warning if we dont give any value for the prop. But since we have already specified default
    // props, isRequired will never give us warning because a default value will be used incase we dont input a prop value
    title: PropTypes.string.isRequired, 
    about: PropTypes.string.isRequired
}

Header.defaultProps={
    title: "Navbar",
    about: "About Us" //since we didn't give the value of about prop, so this default value for about prop will be used
}