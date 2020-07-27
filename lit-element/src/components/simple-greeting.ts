import { customElement, LitElement, html, property } from 'lit-element';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
    @property() name = 'Natura';

    render() {
        return html`<p>Hello, ${this.name}</p>`;
    }
}
