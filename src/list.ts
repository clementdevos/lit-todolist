import {css, customElement, html, LitElement} from 'lit-element';

@customElement('my-list')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
  render() {
    return html`<div>Hithere</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-list": MyElement;
  }
}
