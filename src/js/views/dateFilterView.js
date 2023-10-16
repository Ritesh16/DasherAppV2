import View from "./view";
import datepicker from "js-datepicker";

class DateFilterView extends View {
  _parentElement = document.querySelector(".filter");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return `
    <div class="row">
    <div class="col-4" style="text-align: left">
      <label>From Date</label>
    </div>
    <div class="col-4" style="text-align: left">
      <label>To Date</label>
    </div>
    <div class="col-4" style="text-align: left">
      <label>Location </label>
    </div>
  </div>
  <div class="row">
    <div class="col-2">
      <div class="form-group">
        <!-- <select class="form-select">
          <option>Jan</option>
          <option>Feb</option>
        </select> -->
        <input class="fromDate" />
      </div>
    </div>
    <div class="col-2">
      <div class="form-group">
        <select class="form-select">
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
    </div>

    <div class="col-2">
      <div class="form-group">
        <select class="form-select">
          <option>Jan</option>
          <option>Feb</option>
        </select>
      </div>
    </div>
    <div class="col-2">
      <div class="form-group">
        <select class="form-select">
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
    </div>

    <div class="col-2">
      <div class="form-group">
        <select class="form-select">
          <option>All</option>
          <option>Middletown</option>
          <option>Newark</option>
        </select>
      </div>
    </div>
  </div>
    `;
  }

  showCalendar() {
    const picker = datepicker(".fromDate");
  }
}

export default new DateFilterView();
