// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {
  static get properties() {
    return {
      mood: String
    };
  }
  firstUpdated() {
    console.log('first rendered');
    this.addEventListener('sayHello', () => {
      console.log('Hello');
    });
  }

  sayHi() {
    console.log('hi');
    this.dispatchEvent(new CustomEvent('sayHello', { bubbles: true, composed: true }));
  }
  render() {
    return html`
      <button @click="${this.sayHi}">Say Hi</button>
    `;
  }
}
// Register the new element with the browser.
customElements.define('button-element', MyElement);

// We are setting the following two properties on the CustomEvent:

// bubbles Allows the event to bubble through the DOM.
// composed Allows bubbling through Shadow DOMs boundary, setting this to true allows the event to be intercepted by the main DOM.
