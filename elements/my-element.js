// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {
  static get properties() {
    return {
      feeling: String
    };
  }
  render() {
    return html`
      <!-- template content -->
      <p>I'm feeling ${this.feeling}</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);
