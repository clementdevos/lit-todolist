import {css, customElement, html, LitElement, property} from 'lit-element';

import './list-item';
import {Todo} from './types/todo';

@customElement('my-list')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-radius: 5px;
      border: 1px solid #f0f0f0;
      background-color: #f9f9f9;
      padding: 16px;
      min-width: 300px;
    }
    h1 {
      text-align: center;
    }
  `;
  @property({type: Array})
  items = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((items) => (this.items = items.slice(0, 20)));
  }

  handleChange(event: CustomEvent<{id: number; value: boolean}>) {
    console.log('je suis là !', event);
    const item: any = this.items.find(
      (haystack: Todo) => event.detail.id === haystack.id
    );
    if (!item) {
      return;
    }
    item.completed = event.detail.value;
    console.log({item, items: this.items});
    this.update(['items']);
  }

  render() {
    return html`<div>
      <h1 class="title">Important items</h1>
      <div>
        <h2>TODO</h2>
        ${this.items
          .filter((item: any) => !item.completed)
          .map(
            (item) =>
              html`<list-item
                @change="${this.handleChange}"
                .item="${item}"
              ></list-item>`
          )}
      </div>
      <div>
        <h2>DONE</h2>
        ${this.items
          .filter((item: any) => item.completed)
          .map(
            (item) =>
              html`<list-item
                @change="${this.handleChange}"
                .item="${item}"
              ></list-item>`
          )}
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-list': MyElement;
  }
}
