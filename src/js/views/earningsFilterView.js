import View from "./view";

class EarningsFilterView extends View {
  _parentElement = document.querySelector(".filter");

  addHandleRender(handler) {
    const links = this._parentElement.querySelectorAll(".form-check-input");
    links.forEach((link) => {
      link.addEventListener("click", handler);
    });
  }

  _generateMarkup() {
    return `
      <div class="row">
      <div class="col-2" style="text-align: left">
       <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="Weekly" checked>
       Weekly
      </div>
      <div class="col-2" style="text-align: left">
        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="Monthly">
        Monthly
      </div>
      <div class="col-2" style="text-align: left">
        <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="Daily">
        Daily
      </div>
    </div>
        `;
  }
}

export default new EarningsFilterView();
