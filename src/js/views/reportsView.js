import View from "./view.js";
import datepicker from "js-datepicker";
import { formatDate } from "../utility";

class ReportsView extends View {
    _parentElement = document.querySelector(".dashList");

    loadDates() {
        var todaydate = new Date();
        var day = todaydate.getDate();
        var month = todaydate.getMonth() + 1;
        var year = todaydate.getFullYear();
        var datestring = month + "-" + day +"-" + year;

        this._addCalendar("#startDate", new Date(2022, 9, 27));
        this._addCalendar("#endDate", new Date());

        document.getElementById("startDate").value = "10-27-2025";
        document.getElementById("endDate").value = datestring;
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

      generateReport(handler) {
        handler();
      }


    _generateMarkup() {
        return `
        <h2>Report</h2>
         <form class="generateReportForm">
        <div class="row">
            <div class="col-2">
             <label class="form-label mt-1">Start Date</label>
            </div>
            <div class="col-2">
                <input type="text" class="form-control" id="startDate" name="startDate">
            </div>
            <div class="col-2">
             <label class="form-label mt-1">End Date</label>
            </div>
            <div class="col-2">
                <input type="text" class="form-control" id="endDate" name="endDate">
            </div>
            <div class="col-2">
                <input type="submit" class="btn btn-primary generateBtn">
            </div>
        </div>
        </form>
     `;
    }
}

export default new ReportsView();
