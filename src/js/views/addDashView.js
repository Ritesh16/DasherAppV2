import View from './view.js';
import datepicker from "js-datepicker";
import { formatDate } from "../utility";

class AddDashView extends View {
    _parentElement = document.querySelector('.dashList');

    addMoreHandler(handler) {
        document.querySelector(".addMoreBtn").addEventListener("click", handler);
    }

    addHandlerUpload(handler) {
        const form = document.querySelector('.addDashForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            debugger;
            var formData = new FormData(form);

           var data = {
                dashDate: formData.get('dashDate'),
                location: formData.get('location'),
                details: []
            };

            // Collect data from dynamically added rows
            var rows = form.querySelectorAll('.row');
            rows.forEach(row => {

                if(row.querySelector('[name="dashDate"]') || row.querySelector('[name="submitDash"]')) {
                    return;
                }

                debugger;

                if(!row.querySelector('[name="startTime"]').value) {
                    alert("Please select a start time");
                    return;
                }


                data.details.push({ 
                        startTime: row.querySelector('[name="startTime"]').value, 
                        endTime: row.querySelector('[name="startTime"]').value,
                        amount: row.querySelector('[name="amount"]').value,
                        mileage: row.querySelector('[name="mileage"]').value
                });
            });

            console.log(data);

          //handler(data);
        });
      }

      showCalendar() {
        this._addCalendar("#dashDate", new Date(2025, 3, 3));
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
    
    _generateMarkup() {
        return `
        <h2>Add Dash</h2>
        <form class="addDashForm">
        <div class="addDashDiv">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <input name="dashDate" type="text" class="form-control" id="dashDate" class="dashDate" >
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <select name="location" class="form-select" id="exampleSelect1">
                            <option value="Middletown">Middletown</option>
                            <option value="Newark">Newark</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                      <button id="addMoreBtn" type="button" class="btn btn-primary addMoreBtn" fdprocessedid="ibcyb">Add More Dash</button>
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="dashStartTime">Start Time</label>
                        <input name="startTime" type="time" class="form-control" id="startTime">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="dashEndTime">End Time</label>
                        <input name="endTime" type="time" class="form-control" id="endTime">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="amount">Amount</label>
                        <input name="amount" type="number" class="form-control" id="amount">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="mileage">Mileage</label>
                        <input name="mileage" type="number" class="form-control" id="mileage">
                    </div>
                </div>
            </div>
           
            </div>
             <div class="row">
            <div class="col-md-6">
                    <div class="form-group">
                       <input name="submitDash" type="submit" class="btn btn-primary" value="Submit">
                    </div>
                </div>
            </div>
        </form>
        `;
    }
}

export default new AddDashView();