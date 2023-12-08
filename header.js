/* 
    Title:  Navbar
    File Name: header.js
    Author: Phuong Tran
    Date: 12/07/2023
    Description: Personal portfolio with school's projects.
    Resources: https://github.com/buwebdev/web-330/blob/master/week-5/houses/header-component.js
*/
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header id="header">
          <div class="container">
            <nav id="main-nav">
              <h1 ><a href="index.html" class="nav-brand">PT</a></h1>
              <ul>
                <li><a href="index.html" class="current">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
      
          <!-- Header Content -->
          <div class="header-content">
            <div class="header-inner">
              <p>Hi, there</p>
              <p>My name is<span class="current-color"> Phuong Tran</span>. I'm a Designer / Full Stack Web Developer living in Orange County, CA.</p>
                  <a href="#work" class="btn btn-light">View My Work</a>
            </div>
          </div>
      </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);

