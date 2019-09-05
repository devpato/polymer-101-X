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

        :host {
          color: green;
        }

        paper-checkbox.red {
          --paper-checkbox-size: 2em;
          --paper-checkbox-checked-color: var(--paper-red-500);
          --paper-checkbox-checked-ink-color: var(--paper-red-500);
          --paper-checkbox-unchecked-color: var(--paper-red-900);
          --paper-checkbox-unchecked-ink-color: var(--paper-red-900);
          --paper-checkbox-label-color: var(--paper-red-700);
          --paper-checkbox-vertical-align: top;
        }
      </style>
      <div class="test">
        <p>I'm feeling ${this.mood}</p>
        <slot></slot>
        <slot name="child"></slot>
        <slot name="child2"></slot>
        <br />
        <paper-checkbox class="red">Checked</paper-checkbox>
      </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);
