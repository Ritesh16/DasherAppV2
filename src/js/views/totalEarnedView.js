import View from "./view";

class TotalEarnedView extends View {
  _parentElement = document.querySelector(".statistics");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return `
    <li class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center"
            >
              Total Earned
              <span class="badge bg-primary rounded-pill">${this._data}</span>
            </li>
    `;
  }
}

export default new TotalEarnedView();
