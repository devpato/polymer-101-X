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
      <style>
        .test {
          background-color: grey;
        }
      </style>
      <div class="test">
        <p>I'm feeling ${this.mood}</p>
        <slot></slot>
        <slot name="child"></slot>
        <slot name="child2"></slot>
        <br />
        <paper-checkbox checked>Checked</paper-checkbox>
      </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);
