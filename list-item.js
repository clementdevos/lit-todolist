var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property } from 'lit-element';
let MyElement = class MyElement extends LitElement {
    constructor() {
        super();
    }
    handleClick() {
        this.dispatchEvent(new CustomEvent('change', {
            detail: { id: this.item.id, value: !this.item.completed },
        }));
    }
    render() {
        return html `<div @click="${this.handleClick}">
      <input type="checkbox" ?checked="${this.item.completed && 'checked'}" />
      <span class="title">${this.item.title}</span>
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
    }
    .title {
      text-transform: capitalize;
    }
  `;
__decorate([
    property({ type: Object })
], MyElement.prototype, "item", void 0);
MyElement = __decorate([
    customElement('list-item')
], MyElement);
export { MyElement };
//# sourceMappingURL=list-item.js.map