// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {
  render() {
    return html`
      <button>Say Hi</button>
    `;
  }
}
// Register the new element with the browser.
customElements.define('button-element', MyElement);
