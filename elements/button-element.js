// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {
  static get properties() {
    return {
      mood: String
    };
  }

  sayHi() {
    console.log('hi');
  }
  render() {
    return html`
      <button @click="${this.sayHi}">Say Hi</button>
    `;
  }
}
// Register the new element with the browser.
customElements.define('button-element', MyElement);
