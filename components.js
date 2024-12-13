

class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <h1>Food for Thought</h1>
            </header>
            `;
    }
}


class NavBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <ul>
                    <li class="navbar-item"><a href="/index.html">Home</a></li>
                    <li class="navbar-item"><a href="/about.html">About</a></li>
                    <li class="navbar-item"><a href="/categories.html">Categories</a></li>
                    <li class="navbar-item"><a href="/random.html">Random Recipe</a></li>
                </ul>
            </nav>
            `;
    }
}


class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
             <footer class="footer">
                <ul>
                    <li class="footer-item"><a href="/privacy.html">Privacy Policy</a></li>
                    <li class="footer-item"><a href="/terms.html">Terms of Service</a></li>
                    <li class="footer-item"><a href="/contact.html">Contact</a></li>
                    <li class="footer-item">&copy; 2024 Food for Thought. All rights reserved.</li>
                </ul>
            </footer>
            `;
    }
}

customElements.define("header-component", Header);
customElements.define("navbar-component", NavBar);
customElements.define("footer-component", Footer);