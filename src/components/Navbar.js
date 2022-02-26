import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class Navbar extends Component {
    
    render() {
        return (
        <div className="navbar-fixed">  
            <nav className="black">
            <div className="nav-wrapper">
              <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li ><a href="/">Home</a></li>
                <li ><a href="/resume">Resume</a></li>
                <li ><a href="/projects">Projects</a></li>
              </ul>
            </div>
          </nav>
        </div>
        )
    }
}