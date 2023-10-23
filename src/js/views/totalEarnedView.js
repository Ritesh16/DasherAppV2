import View from "./view";

class TotalEarnedView extends View {
  _parentElement = document.querySelector("#totalEarned");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return ` Total Earned
    <span class="badge bg-primary rounded-pill">$${this._data}</span>        
    `;
  }
}

export default new TotalEarnedView();
