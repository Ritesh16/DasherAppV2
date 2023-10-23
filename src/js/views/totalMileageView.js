import View from "./view";

class TotalMileageView extends View {
  _parentElement = document.querySelector("#totalMileage");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return `
    Total Mileage
    <span class="badge bg-primary rounded-pill">${this._data}</span>
    `;
  }
}

export default new TotalMileageView();
