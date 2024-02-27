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
    <div class="col-3" style="text-align: left">
      <label>From Date</label>
    </div>
    <div class="col-3" style="text-align: left">
      <label>To Date</label>
    </div>
    <div class="col-3" style="text-align: left">
      <label>Location </label>
    </div>
  </div>
  <div class="row">
    <div class="col-3">
      <div class="form-group">
        <input class="form-control fromDate" value='${
          this._data.state.search.fromDate
        }' />
      </div>
    </div>
    <div class="col-3">
    <div class="form-group">
      <input class="form-control toDate" value='${
        this._data.state.search.toDate
      }' />
    </div>
  </div>
  <div class="col-3">
  <div class="form-group">
  <select class="form-control">
     <option value="all">---All---</option>
     ${this._data.state.locations
       .map(function (key) {
         return "<option value='" + key.id + "'>" + key.name + "</option>";
       })
       .join("")}
  </select>  
  </div>
</div>
  </div>
    `;
  }

  showCalendar() {
    this._addCalendar(".fromDate");
    this._addCalendar(".toDate");
  }

  _addCalendar(selector) {
    datepicker(selector, {
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString();
        input.value = value; // => '1/1/2099'
      },
    });
  }
}

export default new DateFilterView();
