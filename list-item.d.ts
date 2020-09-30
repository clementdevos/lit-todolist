import { LitElement } from 'lit-element';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    constructor();
    item: any;
    handleClick(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'list-item': MyElement;
    }
}
//# sourceMappingURL=list-item.d.ts.map