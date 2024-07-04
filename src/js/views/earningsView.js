import View from "./view";

class EarningsView extends View {
  _parentElement = document.querySelector(".dashList");

  _generateMarkup() {
    return `
        <h3>Earnings</h3>
        `;
  }
}

export default new EarningsView();
