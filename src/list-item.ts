import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('list-item')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-radius: 5px;
      border: 1px solid #f0f0f0;
      background-color: #f9f9f9;
      padding: 16px;
    }
    .title {
      text-transform: capitalize;
    }
  `;

  constructor() {
    super();
  }

  @property({type: Object})
  //@ts-ignore
  item;

  handleClick() {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {id: this.item.id, value: !this.item.completed},
      })
    );
  }

  render() {
    return html`<div @click="${this.handleClick}">
      <input type="checkbox" ?checked="${this.item.completed && 'checked'}" />
      <span class="title">${this.item.title}</span>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'list-item': MyElement;
  }
}
