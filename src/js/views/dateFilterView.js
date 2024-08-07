import View from "./view";
import datepicker from "js-datepicker";
import { formatDate } from "../utility";

class DateFilterView extends View {
  _parentElement = document.querySelector(".filter");

  addHandlerRender(handler, callDirectly = false) {
    if (callDirectly) {
      handler();
    } else {
      window.addEventListener("load", handler);
    }
  }

  addHandlerOnSearch(handler) {
    document.querySelector(".searchbtn").addEventListener("click", handler);
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
    <select class="form-control location">
      <option value="all">All</option>
      ${this._data.state.locations
        .map(function (key) {
          return "<option value='" + key.id + "'>" + key.name + "</option>";
        })
        .join("")}
    </select>  
    </div>
  </div>
  <div class="col-1">
    <div class="form-group">
        <button class="btn btn-primary searchbtn">Search</button>
    </div>
  </div>
  </div>
    `;
  }

  showCalendar() {
    this._addCalendar(".fromDate", new Date(2022, 9, 27));
    this._addCalendar(".toDate", new Date());
  }

  _addCalendar(selector, date) {
    datepicker(selector, {
      formatter: (input, date, instance) => {
        const value = formatDate(date);
        input.value = value; // => '1/1/2099'
      },
      startDate: date,
    });
  }
}

export default new DateFilterView();
