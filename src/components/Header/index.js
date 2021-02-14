import React from 'react';
import './style.css';

export default function Header() {
    return (
        <div class="container">
        <div class="row">
          <div class="auto">
            <nav class="navbar navbar-expand navbar-light bg-light">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#about">About Me</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
}
//<button onClick={alertme}><img src="githubimage.png" width='20' height='20'/></button>