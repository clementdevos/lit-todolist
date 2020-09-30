import {css, customElement, html, LitElement} from 'lit-element';
import './list';

@customElement('lit-home')
export class MyElement extends LitElement {
  static styles = css`
  * {
   font-family : Fira Sans
  }
    :host {
      display: flex;
      width : 100%
      alignItems: center;
      padding: 16px;
    }
  `;
  render() {
    return html`
      <div>
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
