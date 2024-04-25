import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { MUIComponent } from "./mui/mui-component";

@customElement("mui-app")
export class MuiAppElement extends MUIComponent {
  render() {
    return html`<h1>Hello, World!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit voluptate minima suscipit? Obcaecati, commodi iure repellendus nostrum, perspiciatis rem officia aperiam suscipit odit at
        doloribus, doloremque repudiandae recusandae cumque.
      </p>`;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "mui-app": MuiAppElement;
  }
}
