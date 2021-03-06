import { LitElement } from 'lit-element';
import './list-item';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    items: never[];
    constructor();
    connectedCallback(): void;
    handleChange(event: CustomEvent<{
        id: number;
        value: boolean;
    }>): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-list': MyElement;
    }
}
//# sourceMappingURL=list.d.ts.map