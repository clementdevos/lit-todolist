import {css, customElement, html, LitElement} from 'lit-element';
import './list';

@customElement('lit-home')
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
    return html`
      <div>
      Coucou
        <my-list></my-list>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-home': MyElement;
  }
}
