import View from "./view";
import datepicker from "js-datepicker";
import { formatDate } from "../utility";

class DailyEarningsView extends View {
  _parentElement = document.querySelector(".dashList");

  _generateMarkup() {
    return `
    <h3>Daily Earnings</h3>
      <div class="row">
        <div class="col-2">From Date</div>
              <div class="col-3">
                <input class="form-control dailyEarningsFromDate" value='${
                  this._data.state.earnings.dailyEarnings.filter.fromDate
                }' />
              </div>
              <div class="col-2">
                To Date
              </div>
              <div class="col-3">
                <input class="form-control dailyEarningsToDate" value='${
                  this._data.state.earnings.dailyEarnings.filter.toDate
                }' />
              </div>
              
              <div class="col-2">
               <button type="button" class="btn btn-primary searchDailyEarningsBtn">Search</button>
              </div>
      </div>
      <table class="table table-hover">
      <!--!-->
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Total Minutes</th>
          <th scope="col">Hourly Rate</th>
        </tr>
      </thead>
      <tbody>
      ${this._data.state.earnings.dailyEarnings.data
        .map(function (dash) {
          return `<tr class=table-primary> 
            <td>${dash.date.toLocaleDateString()}</td>
            <td>${dash.amount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</td>
            <td>${dash.totalMinutes}</td>
            <td>${dash.hourlyRate.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</td>            
            </tr>`;
        })
        .join("")}
       
      </tbody>
    </table>
    `;
  }

  addHandleSearch(handler) {
    document
      .querySelector(".searchDailyEarningsBtn")
      .addEventListener("click", handler);
  }

  showCalendar() {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    this._addCalendar(".dailyEarningsFromDate", firstDay);
    this._addCalendar(".dailyEarningsToDate", lastDay);
  }

  _addCalendar(selector, date) {
    datepicker(selector, {
      formatter: (input, date, instance) => {
        const value = formatDate(date);
        input.value = value; // => '1/1/2099'
        console.log(1, date);
      },
      startDate: date,
    });
  }
}

export default new DailyEarningsView();
