var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property } from 'lit-element';
import './list-item';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super();
        this.items = [];
    }
    connectedCallback() {
        super.connectedCallback();
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((items) => (this.items = items.slice(0, 20)));
    }
    handleChange(event) {
        console.log('je suis là !', event);
        const item = this.items.find((haystack) => event.detail.id === haystack.id);
        if (!item) {
            return;
        }
        item.completed = event.detail.value;
        console.log({ item, items: this.items });
        this.update(['items']);
    }
    render() {
        return html `<div>
      <h1 class="title">Important items</h1>
      <div>
        <h2>TODO</h2>
        ${this.items
            .filter((item) => !item.completed)
            .map((item) => html `<list-item
                @change="${this.handleChange}"
                .item="${item}"
              ></list-item>`)}
      </div>
      <div>
        <h2>DONE</h2>
        ${this.items
            .filter((item) => item.completed)
            .map((item) => html `<list-item
                @change="${this.handleChange}"
                .item="${item}"
              ></list-item>`)}
      </div>
    </div>`;
    }
};
MyElement.styles = css `
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
__decorate([
    property({ type: Array })
], MyElement.prototype, "items", void 0);
MyElement = __decorate([
    customElement('my-list')
], MyElement);
export { MyElement };
//# sourceMappingURL=list.js.map