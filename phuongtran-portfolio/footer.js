/* 
    Title: Portfolio Footer
    File Name: footer.js
    Author: Phuong Tran
    Date: 12/04/2023
    Description: Personal portfolio with school's projects.
    Resources: Resources: https://github.com/buwebdev/web-330/blob/master/week-5/houses/header-component.js
*/
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer id="main-footer">
        <div class="footer-content container">
          <p>Copyright &copy; 2023. All Rights Reserved</p>
          <div class="social">
            <i class="fab fa-github"><a href="https://github.com/ptran999"></a></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
