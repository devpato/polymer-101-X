// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import '@polymer/paper-checkbox/paper-checkbox.js';

// Extend the LitElement base class
class MyElement extends LitElement {
  static get properties() {
    return {
      mood: String
    };
  }
  render() {
    return html`
      <!-- template content -->
      <p>I'm feeling ${this.mood}</p>
      <paper-checkbox checked>Checked</paper-checkbox>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);
